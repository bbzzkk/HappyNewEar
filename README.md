
### 시연 영상(유투브 링크)
[![Video Label](http://img.youtube.com/vi/YOCiTByHRqs/0.jpg)](https://www.youtube.com/watch?v=YOCiTByHRqs) 

# Happy New Year:heart: 
## 리액트 프로젝트 에어팟 악세사리 쇼핑몰 
---
### 리액트 언어로 진행한 웹 쇼핑몰 사이트 토이 프로젝트입니다. (진행중, 완성도 : 70%)
#### 총 4명의 팀원으로 구성되어 있습니다. <br><br>개발기간  :  2020.08.14(금) ~ 2020.08.20(목) 
- **역할** 
  - **귀여운욘듀(이연주, 팀장)** : 로그인/회원가입 기능 구현, 로그인/회원가입 UX/UI, 데이터 베이스/라우터 연동
  * **곽병선(Kwak-bs)** : 카테고리 페이지 기능 구현, 상세페이지 UX/UI, 메인 페이지 기능 구현
  + **조성원** : 장바구니 기능 구현, 메인 페이지 기능 구현, 메인 페이지 UX/UI
  - **하태린** : 상세페이지 기능 구현, 슬라이더 기능 구현, 장바구니 UX/UI

### - 언어 
* React

### - 사용 라이브러리 및 리소스
* MobX
* Semantic UI
* Material UI
* Emotion
* Reac Router
* Firebase 
* json
* Git
* GitHub
* chromedriver


### - DB 환경 
* Firebase


### - 기능 설명

**1. Sign Up / Sign In**
- 고객은 구글 계정으로 로그인하여 서비스를 사용할 수 있습니다.
- 고객의 회원 가입 정보 입력 후 회원 정보 DB에 저장되어야 합니다.    
![회원가입](https://user-images.githubusercontent.com/51367622/90961683-a2e85400-e4e5-11ea-9301-27176503b4d7.PNG)

**2. Page Router**
- 고객은 특정 주소에 따라 특정 데이터에 직접 접근할 수 있습니다.
- 브라우저는 특정 주소에 따라 파일을 로드 하여 렌더링합니다. 
![페이지 라우터](https://user-images.githubusercontent.com/51367622/90961679-a1b72700-e4e5-11ea-950e-559970d26c36.PNG)

**3. Header**
- 브라우저는 스크롤 이벤트와 관계 없이 헤더를 상단에 고정시킵니다. 
- Posiotion : fixed, z-index 적용

![헤더1](https://user-images.githubusercontent.com/51367622/90961680-a1b72700-e4e5-11ea-949c-02d251e366f9.PNG)

**4. Main Page**

- 메인 페이지는 상품 기획시리즈를 슬라이딩하여 보여줍니다.
- 고객은 카테고리별 최신상품 4개씩 미리 볼 수 있습니다. 
- 고객은 카테고리 이름을 클릭하여 카테고리별 상품을 볼 수 있습니다.
- 고객은 상품 이미지를 클릭하여 상품 상세 정보를 볼 수 있습니다. 

![메인페이지 슬라이더](https://user-images.githubusercontent.com/51367622/90961688-a4b21780-e4e5-11ea-9ae7-15622611a386.PNG)
![메인페이지 2](https://user-images.githubusercontent.com/51367622/90961685-a380ea80-e4e5-11ea-882a-7ec349826a17.PNG)

**5. Category Paage**
- 카테고리 페이지는 카테고리에 따라 상품 목록과 인기 상품을 보여줍니다.
![카테고리 1](https://user-images.githubusercontent.com/51367622/90961697-a7ad0800-e4e5-11ea-83dd-219994f90adc.PNG)
![카테고리 2](https://user-images.githubusercontent.com/51367622/90961677-9fed6380-e4e5-11ea-9edf-b8cd3e1a2193.PNG)

**6. Detail Page**
- 상세 페이지는 상품에 대한 판매가, 상품이름, 배송비, 수량, 최종 가격정보를 보여줍니다. 
![상세 페이지](https://user-images.githubusercontent.com/51367622/90961693-a54aae00-e4e5-11ea-8fce-c0eb20ab8b6c.PNG)

**7. Cart Page**
- 고객은 상품 선택 및 삭제에 따라 예상 주문금액을 알 수 있습니다.  
![장바구니 1](https://user-images.githubusercontent.com/51367622/90961694-a5e34480-e4e5-11ea-856d-9f584440b940.PNG)

### - 전체 디렉토리 구조 
![전체 디렉토리 구조](https://user-images.githubusercontent.com/51367622/90961695-a67bdb00-e4e5-11ea-9d04-c2fa5dfaed6b.PNG)

### - 회고 & 느낀 점

- **이연주** 
  - 작 
  * 성 
  + 하 
  - 셈 
 
- **곽병선**  
  - 첫 리액트 프로젝트이여서 부족한 점이 상당히 많았지만, 프로젝트를 진행하면서 리액트의 역량을 최대한으로 끌어 올릴 수 있는 계기가 되었다.
  * 메인 페이지의 카테고리별 Preview List를 출력할 때, 카테고리의 아이템들중 4개만을 출력하여야 하는데 조건을 사용하는 방법이 미숙하였다. 하지만 Filter를 사용하여 쉽게 해결할 수 있었다. 어렵지 않은 문제였는데 시간을 많이 쏟아서 자존심이 상하였지만 혼자 해결했다는 마음에 뿌듯했다. 첫 해결 코드 : const prevItems = items.filter(tmp => tmp.id < 5); 
  + 고객이 상세페이지에서 수량을 설정하여 버튼을 클릭하였을 때, 장바구니에 적용하는 로직이 생각보다 쉽지 않았다. Semantic 라이브러리의 Dropdown을 사용하였지만 Value값을 부모 컴포넌트에 보내는 것이 쉽지 않았다. 결국 우리 팀장님의 도움을 받았다. 해결방법은 부모 컴포넌트(Container)에 리턴값으로 e.tartget을 보낸 후 정규표현식과 ㅇㅁ릔으림ㅇ르밍르매댜름ㅇㄴㄹ ㅢ아르 ㅁ 
  - 협업 툴을 제대로 사용할 수 있는 계기여서 좋았다. 이번 기회에 GitHub를 많이 사용해보았고 Pull Request를 많이 경험하고 구글 미트를 통해 온라인상에서 화상으로 프로젝트를 함께 진행할 수 있어서 더 좋았다. 
 
- **조성원** 
  - 작
  * 성
  + 하
  - 3
  
- **하태린** 
  - 작
  * 성
  + 하
  - 긔
