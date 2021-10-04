# Nuxt.js
<a href="https://nuxtjs.org/docs/get-started/installation">API 사이트 접속</a>
Server Side Rendering 제공을 위한 Vue 라이브러리
https://nuxtjs.org/docs/get-started/installation
현재 Nuxt Vue2 버전만 지원 

Nuxt3 버전은 21.10.12 11시에 오픈 예정이라고 함. <https://nuxtjs.org/v3/>
```
npx create-nuxt-app <project-name>
```


## Open Graph
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

## Heroku 

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