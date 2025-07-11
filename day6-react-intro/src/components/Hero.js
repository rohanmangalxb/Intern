import React from 'react';
import Button from './Button';
import './Layout.css'


function Hero(props) {
    return (
        <>
            <div id='HERO' className="container">

                <div className="heading">
                    Welcome to {props.title}
                </div>
                <hr className='mt-3' />

                <div className="Hsubtext [@media(max-width:750px)]:flex-col">
                    <span  style={{fontFamily: 'serif', fontStyle: 'italic'}} >

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur animi tempora aperiam sint illum voluptas, fuga dolores cum laboriosam perferendis et fugiat natus molestias error. Totam ducimus culpa tenetur, cumque consequuntur, molestias quaerat voluptatem sed placeat illo perspiciatis enim sapiente deleniti rem. Dolore eius omnis aliquid earum, ipsum fugit similique sit minima officia hic quos accusamus facere ab odio reiciendis, nihil at? Voluptates enim quod perferendis officia esse delectus, deleniti est sapiente distinctio quae laudantium corrupti sit asperiores odio at, dolorum assumenda quas maiores ex incidunt impedit doloremque voluptas. Autem reiciendis ipsam beatae, aspernatur delectus rerum. Autem non voluptatem assumenda neque eveniet sed cum quisquam doloremque consequuntur rerum, dignissimos, ipsam tenetur. Inventore nihil soluta dolorem assumenda repellendus ipsum non. Reprehenderit hic sequi laboriosam ipsa alias voluptas aliquid ad. Sit blanditiis corporis atque harum commodi est fugit ad eum expedita nisi, adipisci quos alias molestias non dolor laborum repudiandae optio maiores suscipit doloremque quae eligendi quisquam cumque. Vero aspernatur voluptates minima fuga quaerat unde dolores itaque repellat quo, officia, blanditiis exercitationem! Reprehenderit nihil magni quod tempore! Autem enim ipsa a nesciunt? Impedit voluptatum aperiam placeat sunt quod id dolorem a. Sint deserunt saepe temporibus, nisi autem reprehenderit delectus debitis repellendus eaque.
                    </span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="image" />
                </div>

                <Button />
            </div>
        </>
    );
}

export default Hero;