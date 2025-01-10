import React from 'react';
import ReactDOM from "react-dom/client"; // React 18以降はReactDOM.createRootを使用
import './css/index.css';
import AppRouter from "./AppRouter"; // ルーティングを設定したファイル
import { CookiesProvider } from "react-cookie";

const rootElement = document.getElementById("root"); // DOMのルート要素を取得
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
      <CookiesProvider>
      <AppRouter />
      </CookiesProvider>
    </React.StrictMode>
);
