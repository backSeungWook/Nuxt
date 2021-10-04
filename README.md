# Nuxt.js
SEO 및 SSR제공을 dnl
<a href="https://nuxtjs.org/docs/get-started/installation">API 사이트 접속</a>
Server Side Rendering 제공을 위한 Vue 라이브러리  
https://nuxtjs.org/docs/get-started/installation 현재 Nuxt Vue2 버전만 지원 


Nuxt3 버전은 21.10.12 11시에 오픈 예정이라고 함. <https://nuxtjs.org/v3/>


## Start
```
npx create-nuxt-app <project-name>
```

# Router
Nuxt는 내부적으로 Vue Router for Vue2 플러그인을 사용하지만,  
`<RouterView />`와 `<RouterLink />` 대신,  
`<Nuxt />`, `<NuxtLink />` 컴포넌트를 사용

## Layouts
default.vue
Nuxt는 App.vue 파일을 사용하지 않는다. 대신  
모든 페이지에서 사용할 수 있는 레이아웃 컴포넌트(layouts/default.vue)를 제공할 수 있습니다.  
기존 프로젝트의 src/App.vue 내용을 layouts/default.vue로 이관 

## error.vue
Nuxt는 페이지를 찾을 수 없는 경우 사용할 레이아웃 컴포넌트(layouts/error.vue)를 제공  
기존 프로젝트의 src/routes/NotFound.vue 내용을 layouts/error.vue로 이관

## Pages
Nuxt는 내부적으로 Vue Router for Vue2 플러그인을 사용하지만,
기존 프로젝트의 src/routes/index.js를 제공하지 않아도,
pages폴더의 하위 폴더와 파일 구조를 통해 자동으로 Route 구조를 생성
따라서 기존 프로젝트의 src/routes 폴더 구조를 다음과 같이 수정  
예외 상황으로는 ID라는 매개변수를 사용하여 경로를 지정시 아래와 같이 수정.  
`_id` = /movie/`:id` 대체 되어서 _id.vue를 실행하게 됨.
```
ex 
pages/
├─ movie/
│  └─ _id.vue

'/movie/:id': Movie.vue => movie/_id.vue
```

## Store
store 폴더에 index.js 파일이 존재하면 Nuxt가 자동으로 Store를 활성화  
그 외 모든 파일은 자동으로 Store Modules로 등록되기 때문에,  
index.js에 modules 옵션으로 movie나 about을 모듈로 등록하면 충돌이 발생할 수 있다.
따라서 충돌 방지를 위해 `store/index.js` 파일 내용은 따로 작성하지 않고 빈 값으로 둔다.

## Index.html
Nuxt는 별도의 index.html를 제공하지 않기 때문에,  
`<head> </head>`의 내용을 nuxt.config.js의 head 옵션에 다음과 같이 등록해야 한다.

```js
export default {
  head: {
    title: 'Nuxt Movie App',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@400;700&display=swap' }
    ]
  }
}
```

## Open Graph (SEO 최적화)

https://ogp.me/  
웹 페이지의 메타 데이터를 사용해 페이지 콘텐츠 표시를 표준화하기 위한 페이스북에서 만든 인터넷 프로토콜
```html
<!-- Basic Metadata -->
<html prefix="og: https://ogp.me/ns#">
<head>
<title>The Rock (1996)</title>
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
...
</head>
...
</html>
```

## Heroku (클라우드 서버)
https://www.heroku.com/  
https://dashboard.heroku.com/apps

기본 Config Vars
```
HOST : 0.0.0.0
NODE_ENV : production
NPM_CONFIG_PRODUCTION : false
```

## express
```
npm i -D express
```
## @nuxtjs/dotenv
```
npm i -D @nuxtjs/dotenv
```
```js
//nux.config.js
export default {
  modules: [
    '@nuxtjs/dotenv'
  ]
}
```
.env 파일을 사용해 환경 변수(Environment Variable)를 등록해 사용할 수 있음
```
HOST=localhost
NODE_ENV=development
NPM_CONFIG_PRODUCTION=false
CLIENT_URL=http://localhost:3000
OMDB_API_KEY=xxxxxxxx
```