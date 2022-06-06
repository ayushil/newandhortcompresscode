const WIDTH = 700;
let input = document.getElementById("input");
 input.addEventListener("change" ,(event)=>{
    
    let image_file = event.target.files[0];

    let reader = new FileReader;
    reader.readAsDataURL(image_file);
    
    reader.onload =(event) =>{
        let image_url = event.target.result;
        let image = document.createElement("img");
        image.src = image_url;
        let start = new Date().getTime();
        // console.log(start);
        image.onload =(e)=>{
            let canvas = document.createElement("canvas");

            // with ratio 
            let ratio = WIDTH / e.target.width;
            canvas.width = e.target.width * ratio;
            canvas.height = e.target.height * ratio;

            // without ratio
            // canvas.width = e.target.width;
            // canvas.height = e.target.height;

            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            let new_image_url = context.canvas.toDataURL("image/jpeg",10);

            let new_image= document.createElement("img");

            
            new_image.src =new_image_url;
            document.getElementById("wrapper").appendChild(new_image);
            let end = new Date().getTime();
            // console.log(end);
            let time =end-start;
            console.log("Time to excute",time);
        }

        

    }

 })