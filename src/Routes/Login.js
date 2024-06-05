import React, {useState} from "react";
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom'
import gradient from '../gradient.jpg'
import Button from '../Components/Button'
import logo from '../logo.png'

const WholeWrapper = styled.div`
    display: flex;
    position: absolute;
    width: 1200px;
    height: 700px;
    left: 50%; 
    top: 50%;
    transform : translate(-50%, -50%);
    border-radius : 10px;
    overflow : hidden;
    border: 1px solid #333;
`

const Box = styled.div`
    display: flex;
    flex-flow: column;
    width: 600px;
    height: 700px;
    justify-content : center;
    align-items: center;
    gap: 10px;
    overflow : hidden;
`
const Text = styled.input.attrs({required:true})`
    all:unset;
    width: 70%;
    height: 30px;
    border-bottom: 2px solid #666;
    color: #666;
    font-size: 1rem;
`


const handleLogin = () =>{
    
}


const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginCheck, setLoginCheck] = useState(false)

    const navigate = useNavigate()


    return(
        <WholeWrapper> 
            <Box>
            <h1>로그인</h1>
            <h3>로그인하여 캔메이트의 다양한 서비스를 경험하세요.</h3>
            <div>Email</div>
            <Text type='email' placeholder="e-mail을 입력하세요"/>
            <div>비밀번호</div>
            <Text type='password' placeholder="password"/>
            <Button children='로그인' onClick={handleLogin}/>
            <div>아직 계정이 없으신가요? 회원가입</div>
            <img src={logo}></img>
            </Box>
            <Box>
                <img src={gradient}></img>
            </Box>
        </WholeWrapper>
    )
}


export default Login