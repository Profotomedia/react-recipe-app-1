import React from 'react'
import { Link } from 'react-router-dom'


export default function Recipe(props) {
    const { image_url, title, source_url, publisher, recipe_id } = props.recipe;
    return (
        <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
            <div className="card" style={{ height: '100%' }}>
                <img src={image_url} style={{ height: '14rem' }} alt="recipe" className='img-card-top' />
                <div className="card-body text-capitalize">
                    <h6> {title}</h6>
                    <h6 className='text-warning text-slanted'>
                        provided by {publisher}
                    </h6>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <Link
                        to={`/recipes/${recipe_id}`}
                        className='btn btn-primary text-capitalize'>
                        details</Link>
                    <a
                        href={source_url}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="btn btn-success mx-2 text-capitalize"> recipe url</a>
                </div>
            </div>
        </div>
    )
}
