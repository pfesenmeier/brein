import { RecipeList } from '~/RecipeList';
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type Recipes = { name: string }[];

export const loader: LoaderFunction = async () => {
  return json([{
    name: 'foo',
  }, {
    name: 'bar',
  }]);
}

export default function RecipeListRoute() {
  const recipes = useLoaderData<Recipes>();

  return <RecipeList recipes={recipes} />;
}

