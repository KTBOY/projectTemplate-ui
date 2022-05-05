/*
 * @Author: zlc
 * @Date: 2022-04-14 16:34:12
 * @LastEditTime: 2022-05-05 10:42:35
 * @LastEditors: zlc
 * @Description: 图片压缩
 * @FilePath: \git项目\project-template\案例\图片压缩\image\src\app.js
 */
const fs = require("fs")
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const path = require("path")
const images = require("images")
const readline = require("readline");
const { resolve } = require("path");
const inputVlaue = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let outputDir = path.join(process.cwd(), "imagesTest")
let reg = /^[a-zA-Z]+$/

let positionDir, timeId, pngArrayList = [], jpgArrayList = []
let timeIndex = 0
const setCompress = async () => {
    await setInputName();//输入内容
    await createTimeFile(positionDir);//创建文件
    await getReadFile()//读取文件
    ready()//开始压缩
    
    

}

//判断是否已经有这个文件路径
function setInputName() {
    return new Promise((resolve, reject) => {
        inputVlaue.question('请输入需要压缩文件夹名称：', async (val) => {
            let asr = val.replace(/\s+/g, "");
            if (asr == 'imagesTest') {
                console.log("不可以与默认输出文件夹重名");
                return setFileName("请重新输入！\n")
            } else if (!reg.test(asr)) {
                console.log("只能输入英文");
                return setFileName("请重新输入！\n")
            }
            positionDir = path.join(process.cwd(), asr)
            console.log(positionDir);
            resolve(positionDir)

        })
    })

}
//创建图片文件
function createTimeFile(positionDir) {
    let time_PATH = path.resolve(__dirname, positionDir);//获取是否已经存在这个文件
    return new Promise((resolve, reject) => {
        fs.stat(time_PATH, (err, stat) => {
            if (err) {
                fs.mkdir(positionDir, { recursive: true }, (err) => {
                    resolve(err)
                    console.log(`创建${positionDir}成功！`);
                })
            } else {
                resolve(stat)

            }


        })

    })


}


//读取需要压缩的文件夹
function getReadFile() {
    fs.readdir(positionDir, "utf-8", (err, data) => {
        console.log(data.length);

        if (data.length == 0) {
            console.log("还没有图片，请添加");
        }
        data.forEach((item, index) => {
            let filePath = path.join(positionDir, item)
            let filename = filePath.replace(/\\/g, "/");//把 \ 替换为 /
            let output = filename.replace(positionDir.replace(/\\/g, "/"), outputDir.replace(/\\/g, "/"));//输出位置
            if (path.extname(item) == ".png") {
                pngArrayList.push({ filename, output })
            } else if (path.extname(item) == ".jpg") {
                jpgArrayList.push({ filename, output })
            } else if (fs.statSync(filePath).isDirectory()) {
                readfile(filePath)
            }

        })



    })
}

function ready() {
    let msg=`请把所需压缩图片放入${positionDir}输入yes，开始压缩图片！\n`
    inputVlaue.question(msg, answers => {
        let asr = answers.trim().toLocaleLowerCase()
        if (asr == "yes") {
            console.log("开始压缩...\n");
            setImageData()
        } else {
            ready("指令错误请重新输入,输入yes开始压缩图片\n")
        }
    })
}

function setImageData() {
    if (jpgArrayList.length != 0) {
        jpgArrayList = rmSame(jpgArrayList)
        //压缩jpg
        console.log(jpgArrayList);
        jpgArrayList.forEach(item => {
            createTimeFile(path.dirname(item.output))
            images(item.filename).save(item.output, { quality: 60 })
        })
    }
    //压缩png
    pngArrayList = rmSame(pngArrayList)
    pngCompress(pngArrayList, pngArrayList.length - 1)

}
function rmSame(arr) {
    let newArray = []
    let arrObj = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (newArray.indexOf(element['filename']) == -1 && (fs.statSync(element['filename']).size > 1024)) {
            newArray.push(element['filename'])
            arrObj.push(element)
        } else if (newArray.indexOf(element['filename']) == -1 && (fs.statSync(element['filename']).size <= 1024)) {
            let pathDir = path.dirname(element['output'])
            createTimeFile(pathDir)//判断存放压缩的文件夹是否已经存在，不存在则创建
            fs.createReadStream(element['filename']).pipe(fs.createWriteStream(element['output']))
            console.log(`图片${element['filename']}内存过小，直接转移到${element['output']}`)
        }
    }
    return arrObj
}

//png压缩图片
function pngCompress(arr, index) {
    //压缩结束
    if (index < 0) {
        console.log("\n本窗口在5秒后关闭！")
        setTimeout(() => {
            inputVlaue.close()
        }, 5000)
        return
    }

    let pathDir = path.dirname(arr[index]['output'])
    let filename = arr[index]['filename']
    createTimeFile(pathDir)
    imagemin([filename], {
        destination: pathDir,
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.7]
            })
        ]
    }).then(() => {
        console.log(`图片${filename}压缩完成!`);
        pngCompress(arr, index - 1)
    }).catch(err => {
        console.log(`${arr[index]['filename']}图片压缩不了了，直接转移到${arr[index]['output']}`)
        fs.createReadStream(arr[index]['filename']).pipe(fs.createWriteStream(arr[index]['output']))
        pngCompress(arr, index - 1)
    });

}
setCompress()