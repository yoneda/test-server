import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "menu heatmap edit"
    "menu list edit";
`;

const MenuBox = styled.div`
  background-color: lightsalmon;
  grid-area: menu;
`;

const HeatmapBox = styled.div`
  background-color: beige;
  grid-area: heatmap;
`;

const ListBox = styled.div`
  background-color: azure;
  grid-area: list;
`;

const EditBox = styled.div`
  background-color: cadetblue;
  grid-area: edit;
`;

const Article = styled.div`
  margin: 10px;
  height: 100px;
  background-color: skyblue;
`;

function EmptyApp() {
  return (
    <Layout>
      <MenuBox />
      <HeatmapBox />
      <ListBox>
        <ul>日記リスト</ul>
        <li>コンテンツコンテンツ</li>
        <li>コンテンツコンテンツ</li>
        <li>コンテンツコンテンツ</li>
        <li>コンテンツコンテンツ</li>
        <Article>article</Article>
      </ListBox>
      <EditBox />
    </Layout>
  );
}

export default EmptyApp;
