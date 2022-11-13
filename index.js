const func = () => {
    const sum = (a, b) => a + b;
    let x = 10;
    let y = 20;

    console.log(sum(x, y)); // 30
    debugger;
    x = 20;
    y = 30;

    console.log(sum(x, y)); // 50
};

func();

// https://qna.habr.com/q/708085
// https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
// https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc
// https://www.8host.com/blog/formatirovanie-koda-v-visual-studio-code-s-pomoshhyu-eslint/
