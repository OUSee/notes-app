export type Embed = {
        path: string,
        name: string,
        extension: string
    }

export type Note = {
        id: number,
        title: string,
        text: string,
        embeds: Embed[]
    }