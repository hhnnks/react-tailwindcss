import React from "react";
import Styled from "styled-components";

export default function DesignPatterns() {
  return (
    <DesignContainer className="icontainer">
      <Factory type="A" />
      <Factory type="B" />
      <Factory type="C" />
      <Factory type="D" />
    </DesignContainer>
  );
}

const DesignContainer = Styled.div`
    background: #ccc;
`;

interface IFactoryProps {
  type: string;
}

// 工厂类组件
class Factory extends React.Component<IFactoryProps> {
  createProduct(type: any) {
    switch (type) {
      case "A":
        return <ProductA />;
      case "B":
        return <ProductB />;
      case "C":
        return <ProductC />;
      case "D":
        return <ProductD />;
      default:
        return null;
    }
  }

  render() {
    const { type } = this.props;

    const product = this.createProduct(type);

    return <div>{product}</div>;
  }
}

// 产品A
class ProductA extends React.Component {
  render() {
    return <div>Product A</div>;
  }
}

// 产品B
class ProductB extends React.Component {
  render() {
    return <div>Product B</div>;
  }
}

// 产品C
class ProductC extends React.Component {
  render() {
    return <div>Product C</div>;
  }
}

// 产品D
class ProductD extends React.Component {
  render() {
    return <div>Product D</div>;
  }
}
