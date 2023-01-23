# Practice design + React 



 ## Getting Started 
    
    Clone this repository and install dependencies

    ***

 -> git clone  https://github.com/DimitarSergeev/Practice-design.git
 -> cd design-practice
 -> npm i 

   --- to start app npm start --- 
***
## Design
Landing Page : [https://www.figma.com/file/uyl0seVHjR5dfFKPTAodUc/Home-page-(Community)?node-id=0%3A1&t=md2YggZiWJJqs6OX-0]
Product One : [https://www.figma.com/file/WYPqPpCulARIn0b1onM7a6/Product-card-(Community)?node-id=0%3A1&t=aftfKC73bA4DjTLH-0]

## 🛠 Libraries and tools used

- [react]
- [@testing-library/react]
- [SwiperJS]
- [sweetaler2]


 ## Description  

 ### Landing Page 

 The Landing page is an implemented design only 

 ### Product One

The Product One page represent detailed page for adding a product . 
The active part(<OrderInfo/>) is in a separate component so that only it can be rerendered, where we can choose color and quantity . The component receives two props (a price per item [onePicePrice] and a function that collects the data[setOrderData] ) . In the component we use two states to collect the information entered by the user and set the information in the [setOrderData] . After pressing one of the "add" action buttons, we send a POST request to the postbin service, in this case mockbin.com[https://mockbin.com/] . 

Body of request look like : 
{
     pices: Number,
     color: string,
     totlaPrice: Number
}

After a successful request, we visualize a popup with the help of [sweetalert2] with a message "Good job!" , if the request is unsuccessful we display a popup with message "Someting went wrong ! "



