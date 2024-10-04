/*
Implement a set of dummy function which can mimic the behaviour of the following function:
1. Download => This fn mimic downloading of some content from an url
2. Write file => this fn should mimic writing of some content of a file
3. upload => this fn should mimic uploading the file to a server*/

/*
Now after Implementing these fn, try to use them in a scenario where we first
 Download a file, then write it to a disk and upload it to a server */

// ?. => optional chaining operator  =>  checks if the callback is non-null then it the value else throw undefined

//Example of callBack hell

function download(url, callback){
    console.log("Downloading from ", url);
    setTimeout(() => {
        console.log("Downloaded the file");
        let downloadData = "some data"
        callback ?.(downloadData);
    }, 3000);
}
function writeFile(data,fileName, callback){
    console.log("writing ", data, "to file");
    setTimeout(() => {
        console.log("writing to file", fileName, "is done");
        let status = "success"
        callback ?.(status);
    }, 2000);
}
function upload(fileName, url, callback){
    console.log("uploading file ", fileName, "to", url);
    setTimeout(() => {
        console.log("uploading is done");
        let uploadStatus = "success"
        callback ?.(uploadStatus);
    }, 3000);
}

function process(){
    download("http://localhost", (data) => {
        writeFile(data, "file.txt", (status) =>{
            upload("file.txt", "http://localhost:8080", (uploadStatus) => {
                console.log("All done")
            });
        })
    })
}
process()