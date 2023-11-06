import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { Row, Col, Button, Typography, Space, Tabs, Select, Form, Input, DatePicker } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;

import moment from "moment";
import ColorPicker from "../comp/color-picker";

function DayRecord() {
  const [form] = Form.useForm();
  const [vals, setVals] = useState({});

  //   change color
  const changeColor = useCallback((color) => {
    setVals((prev) => ({ ...prev, color }));
  }, []);

  // onValuesChange
  const onValuesChange = useCallback((changedValues, allValues) => {
    setVals((prev) => ({ ...prev, ...changedValues }));
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DayRecordStyled>
      <Row className="date" gutter={20}>
        <Col span={17}>
          <div className="day">
            <Title level={3}>2022-09-22</Title>
          </div>
        </Col>
        <Col span={7}>
          <div className="today">
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: "添加文字",
                  key: "1",
                  children: (
                    <div className="edit">
                      <Form
                        name="edit"
                        initialValues={{
                          date: new moment(),
                          fontFamily: "Alimama_ShuHeiTi_Bold",
                          fontSize: "16",
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        onValuesChange={onValuesChange}
                      >
                        <Form.Item name="date">
                          <DatePicker />
                        </Form.Item>

                        <Form.Item name="fontFamily">
                          <Select>
                            <Option rea value="Alimama_ShuHeiTi_Bold">
                              Alimama_ShuHeiTi_Bold
                            </Option>
                            <Option value="Arial">Arial</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item name="fontSize" style={{ width: 80 }}>
                          <Select>
                            <Option value="8px">8</Option>
                            <Option value="9px">9</Option>
                            <Option value="10px">10</Option>
                            <Option value="11px">11</Option>
                            <Option value="12px">12</Option>
                            <Option value="13px">13</Option>
                            <Option value="14px">14</Option>
                            <Option value="16px">16</Option>
                            <Option value="18px">18</Option>
                            <Option value="20px">20</Option>
                            <Option value="24px">24</Option>
                            <Option value="36px">36</Option>
                            <Option value="48px">48</Option>
                            <Option value="60px">60</Option>
                            <Option value="72px">72</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item name="fontWeight">
                          <Select>
                            <Option value="normal">normal</Option>
                            <Option value="bold">bold</Option>
                            <Option value="bolder">bolder</Option>
                            <Option value="lighter">lighter</Option>
                            <Option value="100">100</Option>
                            <Option value="200">200</Option>
                            <Option value="300">300</Option>
                            <Option value="400">400</Option>
                            <Option value="500">500</Option>
                            <Option value="600">600</Option>
                            <Option value="700">700</Option>
                            <Option value="800">800</Option>
                            <Option value="900">900</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item>
                          <ColorPicker onChange={(e) => changeColor(e)}></ColorPicker>
                        </Form.Item>

                        <Form.Item name="content">
                          <Input.TextArea rows={4} placeholder="..." style={{ ...vals }} />
                        </Form.Item>

                        <Form.Item
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Button type="primary" htmlType="submit">
                            添加到日历
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  ),
                },
                {
                  label: "添加贴图",
                  key: "2",
                  children: <div className="picture"></div>,
                },
              ]}
            ></Tabs>
          </div>
        </Col>
      </Row>
    </DayRecordStyled>
  );
}

export default DayRecord;

const DayRecordStyled = styled.div`
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Alimama_ShuHeiTi_Bold";
  box-shadow: none;

  min-height: 100vh;

  .date {
    width: 1080px;
    height: 600px;

    .day {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 12px;
      padding: 12px;
    }

    .today {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 12px;
      padding: 12px;
    }
  }
`;
