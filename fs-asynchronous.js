const fs=require('fs');

fs.writeFile("2.txt","Thishfobowibf iofioweioh",(err)=>{
    if(err) return err;
    console.log("File created successfully");

    fs.readFile("2.txt","utf-8",(err,data)=>{
        if(err) return err;
        console.log("File data:",data);

        fs.appendFile("2.txt","This is a test file created by fs module in Node.js",(err)=>{
            if(err) return err;
            console.log("File updated successfully");
        })
    })
})