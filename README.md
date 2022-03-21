# Hugo + GitHub Pages + Netlify CMS

👉 https://xuanyoga.tk/

## 1. 建立Hugo Website

### (1) 安裝Hugo
windows直接下載[Release](https://github.com/gohugoio/hugo/releases)(建議下載extended版本), 其他OS參考[官方文件](https://gohugo.io/getting-started/installing/)

下載完解壓縮，將路徑加入環境變數

![環境變數](https://imgur.com/716mcpz.png)

在終端機檢查是否安裝成功
```
$ hugo version
hugo v0.84.0-2C4689F7B+extended windows/amd64 BuildDate=2021-06-18T17:14:27Z VendorInfo=gohugoio
```

### (2) 建立新的網站
* 建立新網站
```
$ hugo new site quickstart #網站資料夾名稱
```
* 加入theme
```
$ cd quickstart
$ git init
$ git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```
* 將theme加入site configuration
```
$ echo theme = "ananke" >> config.toml     # windows 不需要加跳脫字元"\"
$ echo theme = \"ananke\" >> config.toml   # other OS
```
* 啟動Hugo server，查看網站是否正常運作 http://localhost:1313/
```
$ hugo server
```
* 生成靜態網站相關資料，預設為 `public` 資料夾
(真正給GitHub Pages顯示的靜態網站資料，如：index.html等等)
```
$ hugo
```
* 建立`.github/workflows/gh-pages.yml`，使用GitHub Actions自動佈署

(未來hugo repo內容有變動，會自動執行 `$ hugo` 生成靜態網站資料將 `public` 資料夾的靜態網站資料push到Branch: gh-pages)
```yaml=
name: github pages # Workflow名稱

on:
  push:
    branches:
      - main  # 整包hugo site所在的branch
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true # 使用extended版本的hugo

      - name: Build
        run: hugo --minify # 執行的指令

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main' # 整包hugo site所在的branch
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public # 設定要發布的資料夾，即生成的靜態網站資料
```
![](https://i.imgur.com/h2GIwyM.png)
* 記得將 `config.toml` 的 **baseURL** 換成 `https://<GitHub_User_Name>.github.io/<GitHub_Repo_Name>/`
```toml=
baseURL = "https://tiiyuu.github.io/test/" #記得換
languageCode = "en-us"
paginate = 6
theme = "portio"
title = "Portio"
```


## 2. 佈署到GitHub Pages
* GitHub建立新的repo
> 1. 若repo名稱為 `<GitHub_User_Name>.github.io` 代表個人Pages，__僅只能建立一個網站__，網址為 `https://<GitHub_User_Name>.github.io/`
> 2. 其餘repo屬於Project Pages，可以建立很多個網站，網址為 `https://<GitHub_User_Name>.github.io/<GitHub_Repo_Name>/`
* 將Hugo site push到repo
```
$ git add .
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/<GitHub_User_Name>/<GitHub_Repo_Name>.git
$ git push -u origin main
```
* 設定GitHub Pages，選擇Branch: gh-pages (自動化佈署的那條Branch)
![](https://imgur.com/BWGvmxA.png)
* 成功將Hugo佈署到GitHub Pages!
前往 `https://<GitHub_User_Name>.github.io/<GitHub_Repo_Name>/` 查看網站

## 3. 串接Netlify後台管理

以Netlify CMS(content management system)建立網站後台系統：網頁內容更新、文章發佈管理、設定後台帳號權限等等

### (1) 從GitHub匯入repo
註冊Netlify，點擊 `New site from Git`
![](https://i.imgur.com/oJPe20N.png)

選擇 `GitHub`
![](https://i.imgur.com/Lyr54CN.png)

點擊對應的repo
![](https://i.imgur.com/I8mtUCp.png)

確認branch正確，點擊 `Deploy site`
![](https://i.imgur.com/qOVOIsG.png)

部署中，稍待一會兒
![](https://i.imgur.com/ishw0Li.png)

完成後會有網址出現
(網址可以到`⚙ Site settings` → `General` → `Site details` → `Site information` → `Change site name`修改)
![](https://i.imgur.com/WsdPx6e.png)

到目前為止有兩個網址可以訪問我們的網站
1. https://<Site_Name>.netlify.app
2. https://<GitHub_User_Name>.github.io/<GitHub_Repo_Name>

### (2) 後台系統設定
開啟後台帳號登錄功能
![](https://i.imgur.com/kEiYEGf.png)

將註冊改為 `invite only` (除非想讓其他人都能註冊後台一同編輯網站)
![](https://i.imgur.com/uUJVUKD.png)

![](https://i.imgur.com/Q6MweMh.png)

開啟 Git Gateway
![](https://i.imgur.com/EofT3Go.png)

點擊 `Generate access token in GitHub` 產生token並save
![](https://i.imgur.com/z2BD98Z.png)

到`Identity` → `Invite users`，輸入email邀請使用者註冊後台 (免費版後台帳號最多5個)
![](https://i.imgur.com/ztjLtLB.png)

複製email的邀請連結

⚠️ 這邊有個bug

邀請連結為 https://<Site_Name>.netlify.app/#invite_token=<Invite_Token>

修正為 https://<Site_Name>.netlify.app/**admin**/#invite_token=<Invite_Token>

![](https://i.imgur.com/LdFV0d4.png)

進入修正後的連結即可設定登入密碼
![](https://i.imgur.com/L6GrIMW.png)


最後，在網址後面加上 **/admin** 就可以進入後台系統囉！
1. https://<Site_Name>.netlify.app/admin
2. https://<GitHub_User_Name>.github.io/<GitHub_Repo_Name>/admin

![](https://i.imgur.com/PAKUQno.png)

### (3) 後台管理系統介面
![](https://i.imgur.com/EzxMY4n.png)

![](https://i.imgur.com/xIufzrc.png)

![](https://i.imgur.com/UcGaQJU.png)

![](https://i.imgur.com/q1pQF6z.png)
  
# References:
1.[ Quick Start | Hugo](https://gohugo.io/getting-started/quick-start/)

2.[ Host on GitHub | Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/)

3.[ 使用 Github Actions 來自動化部署 Hugo 到 Github Pages](https://blog.puckwang.com/post/2020/use-github-actions-deploy-hugo/)
