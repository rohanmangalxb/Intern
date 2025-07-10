import React from 'react'
import './Layout.css'
import Button from './Button'

const Hero = (props) => {
    return (
        <>
            <div id='HERO' className="container bg-amber-100 min-h-screen pb-1">

                <div className="heading text-center pt-20 font-bold text-xl font-serif">
                    Welcome to {props.title}
                </div>
                <hr className='mt-3' />

                <div className="subtext pt-3 px-10 flex gap-10 items-center [@media(max-width:750px)]:flex-col">
                    <span className='font-serif italic'>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur animi tempora aperiam sint illum voluptas, fuga dolores cum laboriosam perferendis et fugiat natus molestias error. Totam ducimus culpa tenetur, cumque consequuntur, molestias quaerat voluptatem sed placeat illo perspiciatis enim sapiente deleniti rem. Dolore eius omnis aliquid earum, ipsum fugit similique sit minima officia hic quos accusamus facere ab odio reiciendis, nihil at? Voluptates enim quod perferendis officia esse delectus, deleniti est sapiente distinctio quae laudantium corrupti sit asperiores odio at, dolorum assumenda quas maiores ex incidunt impedit doloremque voluptas. Autem reiciendis ipsam beatae, aspernatur delectus rerum. Autem non voluptatem assumenda neque eveniet sed cum quisquam doloremque consequuntur rerum, dignissimos, ipsam tenetur. Inventore nihil soluta dolorem assumenda repellendus ipsum non. Reprehenderit hic sequi laboriosam ipsa alias voluptas aliquid ad. Sit blanditiis corporis atque harum commodi est fugit ad eum expedita nisi, adipisci quos alias molestias non dolor laborum repudiandae optio maiores suscipit doloremque quae eligendi quisquam cumque. Vero aspernatur voluptates minima fuga quaerat unde dolores itaque repellat quo, officia, blanditiis exercitationem! Reprehenderit nihil magni quod tempore! Autem enim ipsa a nesciunt? Impedit voluptatum aperiam placeat sunt quod id dolorem a. Sint deserunt saepe temporibus, nisi autem reprehenderit delectus debitis repellendus eaque.
                    </span>
                    <img className='w-1/2 image bg-contain shadow-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="image" width={'100%'}/>
                </div>

                <Button/>
            </div>
        </>
    )
}

export default Hero
