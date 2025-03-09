import{a as f,S as g,i as l}from"./assets/vendor-CQ7ILquZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();function y(r){return f.get("https://pixabay.com/api/",{params:{key:"49242094-b67d71fe272541c15bafae494",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}let h=new g(".gallery a",{captionsData:"alt",captionDelay:250,animationSlide:!0});function o(r){const s=document.querySelector(".gallery");s.innerHTML="";const n=r.map(({webformatURL:t,largeImageURL:e,tags:a,likes:i,views:u,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${t}" alt="${a}" />
        
        <div class="gallery-span-wrapper">
          <div class="gallery-span-wrapper-item">
            <span class="span-title">Likes</span>
            <span class="span-value">${i}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Views</span>
            <span class="span-value">${u}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Comments</span>
            <span class="span-value">${d}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Downloads</span>
            <span class="span-value">${m}</span>
          </div>
        </div>

        </a>
      </li>`).join("");s.insertAdjacentHTML("afterbegin",n),h.refresh()}const v=document.querySelector(".form"),c=document.querySelector(".form-input"),p=document.querySelector(".loader");v.addEventListener("submit",r=>{r.preventDefault();const s=c.value.trim();if(s===""){l.warning({message:"Please fill the field",position:"topRight"}),o([]);return}p.hidden=!1,y(s).then(n=>{const t=n.data.hits;t.length===0?(o([]),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):o(t)}).catch(()=>{o([]),l.error({message:"Something went wrong :(",position:"topRight"})}).finally(()=>{c.value="",p.hidden=!0})});
//# sourceMappingURL=index.js.map
