import React from 'react';
import * as B from './styled';


function Blog () {
    return(
        <>
        <B.VetorBlog>
    <B.title>
        <h2> <span>Algumas dicas </span>
            que são valiosas
        </h2>
    </B.title>
    <B.TextoBlog>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries.
    </B.TextoBlog>
        </B.VetorBlog>
        </>
    );
}



export default Blog;