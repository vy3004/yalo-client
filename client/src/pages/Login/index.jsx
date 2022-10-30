import React from "react";
import { Button, Col, Input, Row, Tabs } from "antd";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import "./style.css";

export default function Login() {
  return (
    <div className="wrapper-login">
      <Row>
        <Col className="login-header" span={24}>
          <span className="login-header-logo">Yalo</span>
          <span className="login-header-title">
            Đăng nhập tài khoản Yalo để kết nối với ứng dụng Yalo Web
          </span>
        </Col>
        <Col className="login-body" span={24}>
          <Tabs defaultActiveKey="2" className="tabs" centered>
            <Tabs.TabPane tab="VỚI MÃ QR" key="1">
              <span>Coming soon</span>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="VỚI SỐ ĐIỆN THOẠI"
              key="2"
              className="login-from"
            >
              <div className="login-phone-input">
                <MobileOutlined
                  style={{
                    fontSize: "17px",
                    padding: "0 11px",
                  }}
                />
                <ReactPhoneInput
                  className="phone-input"
                  country={"vn"}
                  placeholder="Số điện thoại"
                  autoFormat
                  disableCountryCode
                  inputStyle={{ border: "none" }}
                  buttonStyle={{ border: "none", backgroundColor: "white" }}
                ></ReactPhoneInput>
              </div>
              <br></br>
              <div className="login-password-input">
                <Input.Password
                  size="large"
                  bordered={false}
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                />
              </div>
              <Button className="login-btn-login">
                Đăng nhập với mật khẩu
              </Button>
              <Button className="login-btn-sender">
                Gửi yêu cầu đăng nhập
              </Button>

              <Link className="login-link">Quên mật khẩu?</Link>
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col className="login-footer" span={24}>
          <span>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay!</Link>
          </span>
        </Col>
      </Row>
    </div>
  );
}
