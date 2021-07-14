#Git - 1

## Git의 기초 

### git 이란? 
git이란 Linux 계열에서 만든 버전 관리 시스템(VCS, Version Control System)을 의미한다. 

한 마디로 요약하면 

> 작업해서 메모한뒤, 저장소로 보낸다

이 문장을 이해하면 git의 기본적인 원리를 이해할 수 있다. 

![git](https://mishka.kr/img/git_transaction.jpg)

## Git 저장소 만들기 

> git-scm.com/book/ko 사이트를 참고했습니다. 

git 저장소를 만드는 방법은 두 가지로 나뉩니다. 

    1. 직접 로컬 디렉토리에 git 저장소를 적용하는 방법(git init)
    2. 다른 어딘가에서 git 저장소를 clone 하는 방법(git clone)

다음부터 자세히 살펴보겠습니다. 

> 다음 사항은 github의 계정 아이디를 만들었다는 가정을 두고 작성했습니다. 따라서 github 홈페이지에서 자신의 github 계정을 만들어야 합니다. 

### 초기 세팅하기 

git을 사용하기 위해서 다음과 같은 초기 세팅이 선행되어야 합니다. 

    $ git config --global user.name "{github username}"
    $ git config --global user.email "{github email address}"
    $ git config --global core.editor "vim"
    $ git config --global core.pager "cat"
    $ git config --list    

위의 사용자 이름과 email은 본인의 github 계정과 이메일이 동일하도록 작성합니다. 

만약 해당 정보를 잘못 입력하는 경우 다음과 같이 삭제후 다시 입력하면 됩니다. 

    $ git config --global --unset

### git project 시작하는 방법(1) : git init

1. 우선 자신의 로컬 컴퓨터에 저장소를 만들 디렉토리로 이동하거나 새로운 디렉토리를 생성하세요 

* 디렉토리의 이름은 자신의 프로젝트 이름과 동일하게 하는 것이 추후 관리 상 편합니다. 

> 아래 해당 운영체제에 따라 커맨드 또는 터미널을 열고 해당 디렉토리로 이동하거나 디렉토리를 생성하세요
    > 디렉토리 생성 방법은 
    
        $ mkdir 디렉토리 명

* Linux : 

    $ cd /home/user/my_project

* Mac : 

    $ cd /Users/user/my_project

* Windows:

    $ cd /c/user/my_project

2. 다음의 명령어를 실행합니다. 

    $ git init 

이 명령어를 통해 .git 이라는 하위 디렉토리가 만들어집니다. 이를 확인하기 위해서 

    $ ls -a

.git 디렉토리는 저장소에 필요한 뼈대 파일이 들어 있습니다. 

3. 가상 디렉토리(github)와 로컬 디렉토리를 연결하기 위한 작업

    $ git remote add origin {github repository address}

나의 로컬 디렉토리와 연결할 github 주소를 연결한다. 이는 마치 내가 만든 택배의 송장을 보내기 위한 주소를 입력하는 것과 동일하다. 

그러나 매번 송장을 작성할 때마다 귀찮게 주소를 모두 작성하는 것보다 특정 키워드를 사용한다면 더 편할 것이다. (e.g 서울특별시 영등포구 .... -> 국회)

따라서 이런 별명을 origin이라고 붙인 것이다. 

3. 이제 새로운 파일을 만들어 봅시다. 

    $ touch new_file.md

이렇게 새로운 파일을 만들고 난 뒤, 다음을 입력하면

    $ git status 

커맨드 또는 터미널 상에서 'Untracked' 라는 메세지가 보일 겁니다. 이 파일은 아직 git의 stage로 이동하지 않았다는 의미에요. 

Git이 파일을 관리하게 하려면 저장소에 파일을 추가하고 커밋해야 합니다. 다음과 같은 작업을 실행해 주세요. 

    $ git add new_file.md
    $ git commit -m 'new project file'

git commit -m 은 커밋할 때 파일의 수정 내역이나 변경 사항에 대한 간단한 메모를 할 수 있는 옵션입니다. 만약 -m 옵션을 넣지 않으면 vi 에디터가 열리고 새로운 메시지를 입력할 수 있는 창이 뜹니다. 

다음은 commit 메시지를 작성할 때 일반적으로 사용되는 규칙입니다. 

'''
<type>(<scope>): <subject>          -- 헤더
<BLANK LINE>
<body>                              -- 본문
<BLANK LINE>
<footer>                            -- 바닥글
'''
다음은 <type> 자리에 들어가 해당 커밋의 성격을 나타내는 단어입니다. 

'''
feat : 새로운 기능에 대한 커밋
fix : 버그 수정에 대한 커밋
build : 빌드 관련 파일 수정에 대한 커밋
chore : 그 외 자잘한 수정에 대한 커밋
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋
style : 코드 스타일 혹은 포맷 등에 관한 커밋
refactor :  코드 리팩토링에 대한 커밋
test : 테스트 코드 수정에 대한 커밋
'''

***

### git project 시작하는 방법(2) : git clone

git clone은 오히려 위의 방법보다 더 쉽습니다. 내가 복사하려는 다른 github 의 주소를 복사한 후 이를 복제하기만 하면 됩니다. 

1. 복제하려는 github 주소를 복사한다 
2. 저장소를 만들 디렉토리에 이동후, 커맨드 또는 터미널에 다음 명령어를 입력한다. 

    $ git clone {address}

{address} 자리에 복사하려는 주소를 입력하시면 됩니다. 

이렇게 되면 동일하게 해당 디렉토리 내에 .git이라는 디렉토리가 생성됩니다. 
git clone 방법의 장점은 해당 프로젝트의 히스토리를 모두 복사한다는 점에서 프로젝트 히스토리 파악이 용이합니다. 

> 다만 주의할 점은 해당 디렉토리에 두 개 이상의 저장소가 만들어진다면, 최근의 만들어진 저장소가 이전에 만들어진 저장소의 master-slave 관계가 되므로 별도의 디렉토리에 저장소를 분할해서 만들어야 합니다. 

### branch 이름 repository와 통일시켜 주기 

git의 장점 중 하나는 바로 branch를 통해, 하나의 저장소 안에 다양한 버전의 파일을 관리할 수 있다는 점이다. 

이는 차후에 더 자세히 알아보기로 하고, 우선 먼저 commit 을 통해 local repository에 저장된 파일을 github의 원격 저장소로 push해야 한다. 

이를 위해서 나의 github repository 의 branch 이름을 통일시켜야 한다. 나의 github 저장소를 선택하면 상단에, 나의 branch 정보를 확인할 수 있다. 

![github 브랜치 확인](https://t1.daumcdn.net/cfile/tistory/99513A405DC66AE308)

나의 저장소 branch 는 'main' 이므로 이를 바꿔야 한다. 

먼저 지금 현재 로컬 디렉토리의 브랜치 이름을 확인해 본다. 

    $ git branch 

현재 저장소의 브랜치 이름이 github 과 다르다면 다음 명령어를 통해 바꾸어준다. 

    $ git branch -M main

-M 뒤에 새롭게 변경한 브랜치 이름을 작성한다. 

### 원격 저장소로 보내기 

이렇게 로컬 저장소로 이동한 파일들을 원격 저장소로 보내기 위해 다음의 명령어를 실행한다

    $ git push -u origin main 

origin(주소 별명)의 main 브랜치로 저장을 push 하는 명령어 이다. 


## Github 블로그 만들기 

github를 이용해서 블로그를 만드는 방법과 hexo theme을 적용하는 방법에 대해 알아본다. 

### Github 저장소 만들어 주기 

1. 우선 자신의 github 저장소에 다음과 같은 이름의 저장소를 생성(new)한다. 

    {github 계정이륾}.github.io

> 주의할 점은 반드시 계정이름과 동일해야 한다. 

2. 새롭게 만들어진 github 주소를 복사한 후, 자신의 블로그를 관리할 로컬 디렉토리에 복제(clone)한다. 

위에 로컬 디렉토리에서 github 저장소와 연결한 것처럼, 자신의 블로그에 포스팅을 관리할 로컬 디렉토리(e.g my-blog etc)를 만들고 다음 명령어를 입력한다 

    $ git clone {username.github.io url}

### Hexo 만들기  

>Hexo는 빠르고 간단하고 파워풀한 블로그 프레임워크입니다. Markdown(또는 다른 언어)을 사용하여 포스트를 작성하면 Hexo는 금세 멋진 테마를 가미해서 정적인 파일을 생성해 드립니다.

    > hexo.io 홈페이지 다큐멘테이션 참고 

hexo를 이용하기 위해서는 요구 조건이 있습니다. 

    1. git 설치 
    2. node 설치 

node 설치 방법은 다음과 같다 

* Window : [nvm](https://github.com/nvm-sh/nvm)

* Mac : Homebrew 사용 
> $ brew install node 

위의 조건을 충족하면 다음과 같이 hexo 를 설치하면 된다. 

    $ npm install -g hexo-cli


1. hexo init {blog name}

    $ hexo init {blog name}
    $ npm install

자신의 블로그 이름의 디렉토리를 만듭니다. 

2. .config.yml 파일을 수정합니다. (원하는 에디터를 실행해서 파일 안에 있는 정보를 수정합니다)

* 사이트 정보 수정 

    title: {원하는 타이을}
    subtitle: {원하는 부제}
    description:
    author: {글쓴이}

* Url 정보 수정 
    url: https://USERNAME.github.io
    root: /
    permalink: :year/:month/:day/:title/
    permalink_defaults:

자신의 github 계정 주소를 작성합니다. 

* github 정보 수정 
    deploy:
    type: git
    repo: <repository url> #https://bitbucket.org/JohnSmith/johnsmith.bitbucket.io
    branch: [branch]

위의 문서가 잘 작성되었는지 로컬 서버에서 확인합니다. 

    $ hexo server 

이후 나오는 주소 url 을 연결하여 잘 작동되는지 봅니다. 

3. deploy 설치 

    $ npm install hexo-deployer-git --save


4. generate & deploy 

    $ hexo generate 
    $ hexo deploy 

블로그를 정식으로 배포합니다. 

간혹 오류가 나올 경우 다음을 실행합니다. 

    $ hexo clean 
    $ hexo generate
    $ hexo deploy 


### 테마 적용하기 

> [theme](https://hexo.io/themes/) 

1. 위 사이트에서 원하는 테마를 선택한 후, 테마의 url 정보를 복사한다. 
2. 복사한 사이트 정보를 나의 블로그 디렉토리(로컬) 하단에 다음과 같이 복제한다. 

    $ git clone {theme url} themes/next

위의 예제는 next 테마를 선택해서 다운받았기 때문에, themes 디렉토리 하단에 next라는 이름으로 테마를 저장한 것임 

3. .config.yml 파일 100행에 있는 theme 정보를 'next' 로 변경한다. 
4. 테마 적용 후, 다시 배포하여 테마 적용 여부를 확인한다. 