
export type Color = {
  color: string
  contrast: string
}


export type ColorTile = {
  color: string,
  textColor: string,
}

export type PalleteColor = {
  contrast: ColorTile
  main: ColorTile
  [k: number]: ColorTile
}



// colors presets
export const DarkLeyoutPalleteColor: PalleteColor = {
  contrast: {color: '#263238', textColor: '#fff'},
  main: {color: '#78909c', textColor: '#fff'},
  100: {color: '#cfd8dc', textColor: '#333'},
  900: {color: '#263238', textColor: '#fff'}
}
export const LightLeyoutPalleteColor: PalleteColor = {
  contrast: {color: '#263238', textColor: '#fff'},
  main: {color: '#78909c', textColor: '#fff'},
  100: {color: '#cfd8dc', textColor: '#333'},
  900: {color: '#263238', textColor: '#fff'}
}