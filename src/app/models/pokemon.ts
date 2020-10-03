export interface Pokemons {
    "id": number,
    "name": string,
    "nationalPokedexNumber": number,
    "imageUrl": string,
    "imageUrlHiRes": string,
    "types": [],
    "supertype": string,
    "subtype": string,
    "hp": number,
    "retreatCost": [],
    "convertedRetreatCost": number,
    "number": number,
    "artist": string,
    "rarity": string,
    "series": string,
    "set": string,
    "setCode": string,
    "attacks": [
        {
            "cost": [],
            "name": string,
            "text": string,
            "damage": number,
            "convertedEnergyCost": number
        }
    ],
    "resistances": [
        {
            "type": string,
            "value": number
        }
    ],
    "weaknesses": [
        {
            "type": string,
            "value": number
        }
    ]
}
