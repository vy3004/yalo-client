import React, { useState } from "react";
import { Button, Col, Input, Row, Tabs } from "antd";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import QRCode from "qrcode.react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import AuthOtp from "../AuthOtp";

export default function Login() {
  const [checkOtp, setCheckOtp] = useState(true);
  const navigate = useNavigate();

  const handleAuthOtp = () => {
    setCheckOtp(!checkOtp);
  };

  const handleLogin = () => {
    navigate("/");
  };

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
          <div style={{ display: checkOtp ? "block" : "none" }}>
            <Tabs
              defaultActiveKey="2"
              centered
              items={[
                {
                  label: `VỚI MÃ QR`,
                  key: "1",
                  children: (
                    <div className="login-qr">
                      <QRCode
                        className="qr-code"
                        value="Để cho zui"
                        size={250}
                        level={"H"}
                        includeMargin={true}
                      />
                      <span>Quét mã QR bằng Yalo để đăng nhập</span>
                    </div>
                  ),
                },
                {
                  label: `VỚI SỐ ĐIỆN THOẠI`,
                  key: "2",
                  children: (
                    <form className="login-form">
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
                          buttonStyle={{
                            border: "none",
                            backgroundColor: "white",
                          }}
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
                      <Button className="login-btn-login" onClick={handleLogin}>
                        Đăng nhập với mật khẩu
                      </Button>
                      <Button
                        className="login-btn-sender"
                        onClick={handleAuthOtp}
                      >
                        Gửi yêu cầu đăng nhập
                      </Button>

                      <Link className="login-link" to="/repassword">
                        Quên mật khẩu?
                      </Link>
                    </form>
                  ),
                },
              ]}
            />
          </div>

          <div style={{ display: !checkOtp ? "block" : "none" }}>
            <AuthOtp />
          </div>
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
