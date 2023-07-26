<!-- markdownlint-disable MD026 MD033 MD041 -->

# QuizRally!

イオンモール水戸内原と合同で開催するイベント「茨城工業高等専門学校☆天文部 presents 宇宙旅行 in イオンモール水戸内原」で使用するクイズラリーの実装。

## Setup

### clone repository

```powershell
git clone "https://github.com/astronomy-club-at-nitic/quiz-rally.git"
```

### launch conatiner

```powershell
docker compose -f "./docker/docker-compose.development.yaml" -p "quiz-rally" up -d
```
