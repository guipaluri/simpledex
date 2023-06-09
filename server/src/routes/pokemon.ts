import got from 'got'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { translate } from '../utils/translate'

interface PokemonParams {
  pokemon: string
}

interface TypeProps {
  name: string
}

function compareArrays(
  array1: Array<string>,
  array2: Array<string>,
  array3: Array<string>,
) {
  const weaknesses = array1.filter(
    (weakness) => !array2.includes(weakness) && !array3.includes(weakness),
  )

  const resistances = array2.filter(
    (resistance) => !array1.includes(resistance),
  )

  return { weaknesses, resistances }
}

export async function pokemonRoutes(app: FastifyInstance) {
  app.get(
    '/pokemon/:pokemon',
    async (
      req: FastifyRequest<{ Params: PokemonParams }>,
      res: FastifyReply,
    ) => {
      const { pokemon } = req.params

      const { id, name, types, height, weight, sprites } = await got(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        // @ts-ignore
      ).json()

      if (types.length > 1) {
        const weaknessesUnique: string[] = []
        const resistancesUnique: string[] = []
        const noDamageUnique: string[] = []

        const type1 = await got(
          `https://pokeapi.co/api/v2/type/${types[0].type.name}`,
          // @ts-ignore
        ).json()

        const type2 = await got(
          `https://pokeapi.co/api/v2/type/${types[1].type.name}`,
          // @ts-ignore
        ).json()

        type1.damage_relations.double_damage_from.forEach((type: TypeProps) =>
          weaknessesUnique.push(type.name),
        )

        type2.damage_relations.double_damage_from.forEach((type: TypeProps) =>
          weaknessesUnique.push(type.name),
        )

        type1.damage_relations.half_damage_from.forEach((type: TypeProps) =>
          resistancesUnique.push(type.name),
        )

        type2.damage_relations.half_damage_from.forEach((type: TypeProps) =>
          resistancesUnique.push(type.name),
        )

        type1.damage_relations.no_damage_from.forEach((type: TypeProps) =>
          noDamageUnique.push(type.name),
        )

        type2.damage_relations.no_damage_from.forEach((type: TypeProps) =>
          noDamageUnique.push(type.name),
        )

        const { weaknesses, resistances } = compareArrays(
          weaknessesUnique,
          resistancesUnique,
          noDamageUnique,
        )

        const weaknessesPT = weaknesses.map((type) => translate(type))
        const resistancesPT = resistances.map((type) => translate(type))

        const imageFront = sprites.front_default
        const imageBack = sprites.back_default
        const imageFemale = sprites.front_female
        const imageBackFemale = sprites.back_female
        const imageShiny = sprites.front_shiny
        const imageBackShiny = sprites.back_shiny
        const imageShinyFemale = sprites.front_shiny_female
        const imageBackShinyFemale = sprites.back_shiny_female
        const primaryType = types[0].type.name
        const primaryTypePT = translate(types[0].type.name)
        const secondaryType = types[1].type.name
        const secondaryTypePT = translate(types[1].type.name)

        const imageDisplay = sprites.front_default

        return {
          id,
          name,
          imageDisplay,
          imageFront,
          imageBack,
          imageFemale,
          imageBackFemale,
          imageShiny,
          imageBackShiny,
          imageShinyFemale,
          imageBackShinyFemale,
          primaryType,
          primaryTypePT,
          secondaryType,
          secondaryTypePT,
          weaknesses,
          weaknessesPT,
          resistances,
          resistancesPT,
          height,
          weight,
        }
      }

      const type = await got(
        `https://pokeapi.co/api/v2/type/${types[0].type.name}`,
        // @ts-ignore
      ).json()

      const weaknesses: string[] = []
      const resistances: string[] = []

      type.damage_relations.double_damage_from.forEach((type: TypeProps) =>
        weaknesses.push(type.name),
      )

      type.damage_relations.half_damage_from.forEach((type: TypeProps) =>
        resistances.push(type.name),
      )

      const weaknessesPT = weaknesses.map((type) => translate(type))
      const resistancesPT = resistances.map((type) => translate(type))

      const imageFront = sprites.front_default
      const imageBack = sprites.back_default
      const imageFemale = sprites.front_female
      const imageBackFemale = sprites.back_female
      const imageShiny = sprites.front_shiny
      const imageBackShiny = sprites.back_shiny
      const imageShinyFemale = sprites.front_shiny_female
      const imageBackShinyFemale = sprites.back_shiny_female
      const primaryType = types[0].type.name
      const primaryTypePT = translate(types[0].type.name)

      const imageDisplay = sprites.front_default

      return {
        id,
        name,
        imageDisplay,
        imageFront,
        imageBack,
        imageFemale,
        imageBackFemale,
        imageShiny,
        imageBackShiny,
        imageShinyFemale,
        imageBackShinyFemale,
        primaryType,
        primaryTypePT,
        weaknesses,
        weaknessesPT,
        resistances,
        resistancesPT,
        height,
        weight,
      }
    },
  )
}
