import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Allgun = ({ IncreaseCount }) => {
    const [guns, setGuns] = useState([])
    // console.log(guns);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>
            <div className='my-8'>
                <h1 className="text-4xl font-bold mt-4">Welcome To Kopa Samsu-Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam enim sit ea delectus? Dolorem sint a, natus, maiores repellat quaerat laborum eius beatae repudiandae praesentium earum. Facilis quo excepturi repudiandae!</p>
          </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    guns.map(gun => (
                        <Card gun={gun} IncreaseCount={IncreaseCount}></Card>
                    )

                    )
                }
            </div>
        </div>


    );
};

export default Allgun;