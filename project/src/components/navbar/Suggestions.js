import React from 'react';
import './Suggestions.css';

var img1 = "https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png"
var img2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
var img3 = "https://lp2.hm.com/hmgoepprod?set=source[/11/ca/11ca3e84389aa88490fc53cd7974d551e115eb83.jpg],origin[dam],category[ladies_trousers_chinosslacks],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]"
var img4 = "https://www.fjallraven.com/globalassets/fjallraven/spring_1/f77388/zoom_7323450451981_fw18_a_byron_hat_fjaellraeven_21.jpg" 

var buy1 = ""
var buy2 = ""
var buy3 = ""
var buy4 = ""

const Suggestions = (props) => {
    return (
        <>
        <a href = {buy1} className="suggestion" ><img src={img1} id = "prod"/></a>
        <a href = {buy2} className="suggestion" ><img src={img2} id = "prod"/></a>
        <a href = {buy3} className="suggestion" ><img src={img3} id = "prod"/></a>
        <a href = {buy4} className="suggestion" ><img src={img4} id = "prod"/></a>
        </>
    )
}

export default Suggestions