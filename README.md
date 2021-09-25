![Happy New Year Logo](./public/images/HappyNewEar.JPG)

# 🦄Happy New Ear🦄

![version](<https://img.shields.io/badge/version-0.1.0-red>)   ![react](<https://img.shields.io/badge/react-16.13.1-yellow>)   ![mobx](<https://img.shields.io/badge/mobx-5.15.5-blueviolet>)  ![firebase](<https://img.shields.io/badge/firebase-7.18.0-brightgreen>)   ![documentation](<https://img.shields.io/badge/documentation-yes-ff69b4>)

> 귀염뽀짝한 에어팟 케이스들은 다 여기있다!
>
> 에어팟 악세사리 쇼핑몰 **Happy New Ear** 입니다.



## 📺[Demo Video](https://www.youtube.com/watch?v=YOCiTByHRqs) 



## 📚Wiki

##### ✔️Develop Period : 2020.08.14 ~ 2020.08.20

##### ✔️Developer

|               Developer                | 💻what did I do                                               |
| :------------------------------------: | :----------------------------------------------------------- |
| 🙂[곽병선](https://github.com/kwak-bs)  | 카테고리 페이지 기능 구현<br />상세페이지 UX/UI<br />메인 페이지 기능 구현 |
| 🙂[이연주](https://github.com/Joylish)  | 로그인/회원가입 기능 구현,<br />로그인/회원가입 UX/UI<br />데이터 베이스/라우터 연동 |
|  🙂[조성원](https://github.com/JSWww>)  | 장바구니 기능 구현<br />메인 페이지 기능 구현<br />메인 페이지 UX/UI |
| 🙂[하태린](https://github.com/hataerin) | 상세페이지 기능 구현<br />슬라이더 기능 구현<br />장바구니 UX/UI |





## ⚙️Install & Run

- install

  ```Shell
  $ cd FE
  $ npm install
  ```

- Run

  ```shell
  $ npm start
  ```



## 🔨Tech Stack

![개발환경](./public/images/library.JPG) 


# 🗃️Project Folder

```
📁config
📁node_modules
📁public
├── 📁data
├── 📁images
├── index.html
📁script
📁src
├── 📁components
├── 📁containers
├── 📁data
├── 📁pages
├── 📁store
├── App.js
├── index.js
└── Root.js
```



## 📌주요 기능

#### **1. Sign Up / Sign In**   

- 고객은 구글 계정으로 로그인하여 서비스를 사용할 수 있습니다.
- 고객의 회원 가입 정보 입력 후 회원 정보 DB에 저장되어야 합니다

#### ![회원가입](https://user-images.githubusercontent.com/51367622/90961683-a2e85400-e4e5-11ea-9301-27176503b4d7.PNG)

#### **2. Page Router**

- 고객은 특정 주소에 따라 특정 데이터에 직접 접근할 수 있습니다.
- 브라우저는 특정 주소에 따라 파일을 로드 하여 렌더링합니다. 
  ![페이지 라우터](https://user-images.githubusercontent.com/51367622/90961679-a1b72700-e4e5-11ea-950e-559970d26c36.PNG)

#### **3. Header**

- 브라우저는 스크롤 이벤트와 관계 없이 헤더를 상단에 고정시킵니다. 
- Posiotion : fixed, z-index 적용

![헤더1](https://user-images.githubusercontent.com/51367622/90961680-a1b72700-e4e5-11ea-949c-02d251e366f9.PNG)

#### **4. Main Page**

- 메인 페이지는 상품 기획시리즈를 슬라이딩하여 보여줍니다.
- 고객은 카테고리별 최신상품 4개씩 미리 볼 수 있습니다. 
- 고객은 카테고리 이름을 클릭하여 카테고리별 상품을 볼 수 있습니다.
- 고객은 상품 이미지를 클릭하여 상품 상세 정보를 볼 수 있습니다. 

![메인페이지 슬라이더](https://user-images.githubusercontent.com/51367622/90961688-a4b21780-e4e5-11ea-9ae7-15622611a386.PNG)
![메인페이지 2](https://user-images.githubusercontent.com/51367622/90961685-a380ea80-e4e5-11ea-882a-7ec349826a17.PNG)

#### **5. Category Paage**

- 카테고리 페이지는 카테고리에 따라 상품 목록과 인기 상품을 보여줍니다.
  ![카테고리 1](https://user-images.githubusercontent.com/51367622/90961697-a7ad0800-e4e5-11ea-83dd-219994f90adc.PNG)
  ![카테고리 2](https://user-images.githubusercontent.com/51367622/90961677-9fed6380-e4e5-11ea-9edf-b8cd3e1a2193.PNG)

#### **6. Detail Page**

- 상세 페이지는 상품에 대한 판매가, 상품이름, 배송비, 수량, 최종 가격정보를 보여줍니다. 
  ![상세 페이지](https://user-images.githubusercontent.com/51367622/90961693-a54aae00-e4e5-11ea-8fce-c0eb20ab8b6c.PNG)

#### **7. Cart Page**

- 고객은 상품 선택 및 삭제에 따라 예상 주문금액을 알 수 있습니다.  
  ![장바구니 1](https://user-images.githubusercontent.com/51367622/90961694-a5e34480-e4e5-11ea-856d-9f584440b940.PNG)