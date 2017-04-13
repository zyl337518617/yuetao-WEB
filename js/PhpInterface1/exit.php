<?php
/**
 * Created by PhpStorm.
 * User: Evil
 * Date: 2017/3/22
 * Time: 下午3:38
 */


/*
create database UserCenter DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
use UserCenter;
create table personal
(
    ID int(11) not null auto_increment,
    p_account char(50) not null comment '账号',
    p_secret char(128) not null comment '密码',
    p_mobile char(11) not null default '' comment '手机号',
    primary key (ID)
)engine=myisam;
*/



    
    function doPOST(){
        session_start();
        session_unset($_SESSION["user"]);
        echo 0;
    }
    doPOST();
?>



