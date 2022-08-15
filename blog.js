let dataBlog=[]

function addBlog(event){
    event.preventDefault()

    let projectName = document.getElementById("in-project").value
    let description = document.getElementById("in-Description").value
    let iconNodeJs = document.getElementById("node-js").checked
    let iconNextJs = document.getElementById("next-js").checked
    let iconReactJs = document.getElementById("react-js").checked
    let iconTypeScript = document.getElementById("type-script").checked
    let image = document.getElementById("in-image").files

    if(iconNodeJs){
        iconNodeJs = document.getElementById("node-js").value
    } else {iconNodeJs = ``}
    if(iconNextJs){
        iconNextJs = document.getElementById("next-js").value
    } else {iconNextJs = ``}
    if(iconReactJs){
        iconReactJs = document.getElementById("react-js").value
    } else {iconReactJs = ``}
    if(iconTypeScript){
        iconTypeScript = document.getElementById("type-script").value
    } else {iconTypeScript = ``}

    // let start = getStart(new Date(document.getElementById("in-startdate").value))
    let duration = getDuration()

    image = URL.createObjectURL(image[0])
    
    let blog ={
        projectName,
        description,
        iconNodeJs,
        iconNextJs,
        iconReactJs,
        iconTypeScript,
        image,
        duration
        // start
    }
   
    dataBlog.push(blog)

    renderBlog ()


}

function renderBlog(){

    document.getElementById("container").innerHTML = ``

    for (let index = 0; index < dataBlog.length ; index ++) { 
        // console.log(dataBlog[index]) 
        document.getElementById("container").innerHTML += `
        
       
        <a href="detail-blog.html" class="container-post">

            <div >
                <div class="container-image">
                    <img src="${dataBlog[index].image}" alt="Nokia">
                </div>
                <div class="container-title">
                    <h2>${dataBlog[index].projectName}</h2>
                </div>
                <div class="container-description">

                    <p class="container-duration">Durasi: ${dataBlog[index].duration} bulan </p>
                    
                </div>
                ${dataBlog[index].description}
                </div>
            <div class="container-icon">
                <i class="fa-brands fa-${dataBlog[index].iconNodeJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconNextJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconReactJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconTypeScript}"></i>

            </div>
            <div class="container-option">
                <button class="container-option-left">edit</button>
                <button class="container-option-right">delete</button>
            </div>


            <div >

            </div>

        </a>


        `
    }
    
}

// let startDate = new Date (document.getElementById("in-startdate").value)
// let endDate = new Date(document.getElementById("in-enddate").value)

// function getStart (startDate){
    
    // let startDateProject = startDate.getDate()
    // let endDateProject = endDate.getDate()

    // let startMonthProject = ["1","2","3","4","5","6","7","8","9","10","11","12"]
    // let endMonthProject = ["1","2","3","4","5","6","7","8","9","10","11","12"]

    // let startMonthIndex = startDate.getMonth()
    // let endMonthIndex = endDate.getMonth()


    // let startYearProject = startDate.getFullYear()
    // let endYearProject = endDate.getFullYear()

    
    //  console.log(startDateProject)
    //  console.log(startMonthProject[startMonthIndex])
    //  console.log(startYearProject)

    //  console.log(endDateProject)
    //  console.log(endMonthProject[endMonthIndex])
    //  console.log(endYearProject)

    // if (startDateProject < 10) {
    //    startDateProject = "0" + startDateProject}

    //  if (startMonthProject[startMonthIndex] < 10) {
    //     startMonthProject[startMonthIndex] = "0" + startMonthProject[startMonthIndex]
    //  }

    //  let startProject = ` ${startDateProject} ${startMonthProject[startMonthIndex]} ${startYearProject}`
    //  let endProject = ` ${endDateProject} ${endMonthProject} ${endYearProject}`

//     console.log(startProject)
//     return startProject

  
// }

function getDuration(){

let startDate = new Date (document.getElementById("in-startdate").value)
let endDate = new Date(document.getElementById("in-enddate").value)

let duration = endDate - startDate

// console.log(startDate) 
// console.log(endDate)
// console.log(duration)

let bulan = Math.floor (duration / ( 1000 * 3600 * 24 * 30))

if (bulan < 10){bulan = "0"+ bulan}
// console.log(bulan) 
return bulan

}
