const path=require("path");

//webpack만들기 => node.js개발자들이 주로 처리함
// 실제 구동하는데 필요한 파일만 모으기
module.exports={
    //[1] 시작 파일 지정
    entry: path.join(__dirname,'src/index.js'),
    //[2] public폴더의 파일만 모아서 bundle.js로 만들기 ==> .exe와 같음
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    //[3]
    devtool: "inline-source-map",
    //[4] 필요한 파일 모으기
    module: {
        //조건 : 여기는 .js만 => .png도 추가 시 rules:[] 영역 추가하면된다.
        rules: [
            {
                test:/.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ]
    }
}
