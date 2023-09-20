/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Checkbox, Select } from "antd";
import "./index.less";

const MultipleCascader = (props) => {
  const { options, value, onChange, placeholder } = props;
  const childrenKey = "children";
  const selectChildren = true;
  const [caseTree, setCaseTree] = useState<any>([]);
  const [selectedValues, setSelectedValues] = useState<any>([]);
  const [clonedOpts, setClonedOpts] = useState<any>([]);

  useEffect(() => {
    initOptions();
  }, [options]);

  useEffect(() => {
    if (value.length > 0) {
      let newValue = value.filter((m) => m && m.trim());
      setSelectedValues([...newValue]);
    }
  }, [value]);

  useEffect(() => {
    recursiveOpt(clonedOpts, null);
    setCaseTree([clonedOpts]);
  }, [clonedOpts]);

  const initOptions = () => {
    setClonedOpts(deepClone(options));
  };

  const deepClone = (source) => {
    if (!source && typeof source !== "object") {
      throw new Error("error arguments");
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach((keys) => {
      if (source[keys] && typeof source[keys] === "object") {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    });
    return targetObj;
  };

  const hasArrayChild = (obj, childrenKey) => {
    return obj[childrenKey] && Array.isArray(obj[childrenKey]);
  };

  // 展示标签所有层级
  const getLevel = (node: any, key: any) => {
    let levels = [];
    function loop(data) {
      levels.push(data[key]);
      if (data.parent) {
        loop(data.parent);
      }
    }
    loop(node);
    return levels.reverse().join("^");
  };

  /**
   * 根据当前节点 checked
   * 更改所有子孙节点 checked
   */
  const markChildrenChecked = (node) => {
    function loop(children, status) {
      if (children) {
        children.map((child) => {
          if (!child.disabled) {
            child.checked = status;
            if (child.checked) {
              child.indeterminate = false;
            }
          }
          if (hasArrayChild(child, childrenKey)) {
            loop(child[childrenKey], status);
          }
        });
      }
    }
    if (node && hasArrayChild(node, childrenKey) && selectChildren) {
      loop(node[childrenKey], node.checked);
    }
  };
  /**
   * 根据当前节点的 checked
   * 标记父节点 checked、indeterminate 状态
   */
  const markParentChecked = (node) => {
    node.indeterminate = false;
    function loop(node) {
      let checkCount = 0;
      if (hasArrayChild(node, childrenKey)) {
        let childIndeterminate = node[childrenKey].some(
          (child) => child.indeterminate
        );
        node[childrenKey].map((child) => {
          if (child.checked) {
            checkCount++;
          }
        });
        // 子节点全部被选中
        if (checkCount === node[childrenKey].length) {
          node.checked = true;
          node.indeterminate = false;
        } else {
          node.checked = false;
          if (checkCount > 0 || childIndeterminate) {
            node.indeterminate = true;
          } else {
            node.indeterminate = false;
          }
        }
      }
      if (node.parent) {
        loop(node.parent);
      }
    }
    if (node && node.parent && selectChildren) {
      loop(node.parent);
    }
  };

  // 展开下一级
  const spreadNext = (children, index) => {
    if (index || index === 0) {
      if (caseTree.indexOf(children) === -1) {
        if (children && children.length > 0) {
          caseTree.splice(index + 1, caseTree.length - 1, children);
          setCaseTree([...caseTree]);
        } else {
          caseTree.splice(index + 1, caseTree.length - 1);
          setCaseTree([...caseTree]);
        }
      }
    }
  };

  /**
   * 递归option数据
   * 标记数据树形层级 parent
   * 打上初始状态 checked indeterminate
   */
  const recursiveOpt = (nodeArr, parent) => {
    nodeArr.forEach((node) => {
      if (parent) {
        node.parent = parent;
      }
      node.indeterminate = false;
      node.checked = false;
      if (selectedValues.some((val) => val == getLevel(node, "value"))) {
        node.checked = true;
      }
      markChildrenChecked(node);
      markParentChecked(node);
      if (hasArrayChild(node, childrenKey)) {
        recursiveOpt(node[childrenKey], node);
      }
    });
  };

  /**
   * 处理已选中
   * 重新遍历tree，pick除已选中项目
   */
  const pickCheckedItem = (tree) => {
    let newSelectedValues = [];
    setSelectedValues([]);
    onChange && onChange([]);
    function loop(data) {
      if (Array.isArray(data)) {
        data.map((item) => {
          let checkCount = 0;
          if (hasArrayChild(item, childrenKey)) {
            item[childrenKey].map((child) => {
              if (child.checked) {
                checkCount++;
              }
            });
          }
          if (item.checked) {
            if (checkCount === item[childrenKey].length) {
              onChange && onChange([...newSelectedValues]);
              setSelectedValues([...newSelectedValues]);
            } else {
              newSelectedValues.push(getLevel(item, "value"));
              onChange && onChange([...newSelectedValues]);
              setSelectedValues([...newSelectedValues]);
            }
          }
          if (hasArrayChild(item, childrenKey)) {
            loop(item[childrenKey]);
          }
        });
      }
    }
    loop(tree);
  };

  // 点击选择框
  const onCheckChange = (item, checked) => {
    item.checked = checked;
    markChildrenChecked(item);
    markParentChecked(item);
    pickCheckedItem(clonedOpts);
  };

  // 点击删除标签
  const removeTag = (m) => {
    /**
     * 遍历 tree
     * 根据传入label 寻找 item
     */
    function findNodeByValue(value) {
      let result = null;
      function loop(tree) {
        if (tree) {
          tree.find((node) => {
            if (getLevel(node, "value") == value) {
              result = node;
              return true;
            }
            if (hasArrayChild(node, childrenKey)) {
              loop(node[childrenKey]);
            }
          });
        }
      }
      if (value) {
        loop(clonedOpts);
        return result;
      }
    }
    let deletedItem = findNodeByValue(m);
    if (deletedItem) {
      onCheckChange(deletedItem, false);
    }
  };

  const menu = () => {
    return (
      <div className="mn-style-multiple-cascader-level">
        {caseTree.length > 0 &&
          caseTree.map((caseItem, index) => {
            return (
              <div className="cascader-container-levelone" key={index}>
                {caseItem.map((item, i) => {
                  return (
                    <div
                      className="check-item"
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseEnter={() => spreadNext(item[childrenKey], index)}
                      key={i}
                    >
                      <Checkbox
                        checked={item.checked}
                        indeterminate={item.indeterminate}
                        onChange={(e) => onCheckChange(item, e.target.checked)}
                      >
                        {item.value}
                      </Checkbox>
                      {item.children.length > 0 && <div>123</div>}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <Select
      getPopupContainer={(triggerNode) => triggerNode}
      dropdownMatchSelectWidth={false}
      value={selectedValues}
      onDeselect={removeTag}
      mode="multiple"
      dropdownRender={menu}
      style={{ width: "100%" }}
      placeholder={placeholder}
    />
  );
};

export default MultipleCascader;
