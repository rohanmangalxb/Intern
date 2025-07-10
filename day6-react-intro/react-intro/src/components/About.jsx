import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <>
            <div id='ABOUT' className="container min-h-screen bg-emerald-200 pb-1">

                <div className="heading text-center pt-20 font-bold text-xl font-serif">
                    About
                </div>
                <hr className='mt-3' />

                <div className="subtext pt-3 px-10">
                    <span className='font-serif italic'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur animi tempora aperiam sint illum voluptas, fuga dolores cum laboriosam perferendis et fugiat natus molestias error. Totam ducimus culpa tenetur, cumque consequuntur, molestias quaerat voluptatem sed placeat illo perspiciatis enim sapiente deleniti rem. Dolore eius omnis aliquid earum, ipsum fugit similique sit minima officia hic quos accusamus facere ab odio reiciendis, nihil at? Voluptates enim quod perferendis officia esse delectus, deleniti est sapiente distinctio quae laudantium corrupti sit asperiores odio at, dolorum assumenda quas maiores ex incidunt impedit doloremque voluptas. Autem reiciendis ipsam beatae, aspernatur delectus rerum. Autem non voluptatem assumenda neque eveniet sed cum quisquam doloremque consequuntur rerum, dignissimos, ipsam tenetur. Inventore nihil soluta dolorem assumenda repellendus ipsum non. Reprehenderit hic sequi laboriosam ipsa alias voluptas aliquid ad. Sit blanditiis corporis atque harum commodi est fugit ad eum expedita nisi, adipisci quos alias molestias non dolor laborum repudiandae optio maiores suscipit doloremque quae eligendi quisquam cumque. Vero aspernatur voluptates minima fuga quaerat unde dolores itaque repellat quo, officia, blanditiis exercitationem! Reprehenderit nihil magni quod tempore! Autem enim ipsa a nesciunt? Impedit voluptatum aperiam placeat sunt quod id dolorem a. Sint deserunt saepe temporibus, nisi autem reprehenderit delectus debitis repellendus eaque.
                    </span>

                    <div className="skills mt-10 bg-fuchsia-300 py-4">
                        <h2 className='font-bold underline italic p pl-10 mb-5'>My Skills:</h2>
                        <ul className='list-disc pl-10 grid grid-cols-3 gap-y-3 text-red-600 font-mono'>
                            <li>Skill A</li>
                            <li>Skill B</li>
                            <li>Skill C</li>
                            <li>Skill D</li>
                            <li>Skill E</li>
                            <li>Skill F</li>
                            <li>Skill G</li>
                        </ul>
                    </div>

                    <Button/>
                </div>
            </div>
        </>
    )
}

export default About
