import React from 'react';

import RecipeSummary from './RecipeSummary';

const RecipeList = ({recipes}) => {
    return (
        <div className="recipe-list section">
            { recipes && recipes.map(recipe => {
                return (
                    <RecipeSummary recipe={recipe} key={recipe.id} />
                )
            })}
        </div>
    )
}

export default RecipeList;