import React from 'react';
 

const Card = (props) => {
    console.log(props)
    const { gun, IncreaseCount} = props;
    console.log(gun)
    const { id, name, img, bullet, capacity ,price} = gun;
    return (
        <div>
            <div class="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className="w-96 h-44" src={img} alt="Gun" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions ">
                        <div class="badge badge-outline">{capacity}</div>
                        <div class="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                            <button onClick={() => IncreaseCount()} class="btn btn-sm mr-2">ADD TO CARD</button>
                            
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className="btn btn-sm">DETAILS</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold"> {name}</h3>
                                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit nisi tenetur perferendis quidem consequatur?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;