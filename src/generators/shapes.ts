import {
  color,
  colorVector,
  scalarVector,
  position,
  distance,
  text,
  scalar,
  distanceVector,
  path
} from '../common/inputs'
import { Generator } from '../common/shapes'
import { Position } from '../common/configs'

interface GradientConfig {
  readonly colors?: ReadonlyArray<string>
  readonly stops?: ReadonlyArray<number>
  readonly image: object
}

export interface LinearGradientConfig extends GradientConfig {
  readonly start?: Position
  readonly end?: Position
}

export interface RadialGradientConfig extends GradientConfig {
  readonly center?: Position
  readonly radius?: string
}

export interface SweepGradientConfig extends GradientConfig {
  readonly center?: Position
}

export interface TextImageConfig {
  readonly text: string
  readonly fontName?: string
  readonly fontSize?: string
  readonly image: object
  readonly color?: string
}

interface ShapeConfig {
  readonly color?: string
  readonly image: object
}

export interface CircleShapeConfig extends ShapeConfig {
  readonly radius?: string
}

export interface OvalShapeConfig extends ShapeConfig {
  readonly radiusX?: string
  readonly radiusY?: string
  readonly rotation?: number
}

export interface PathShapeConfig extends ShapeConfig {
  readonly path: unknown[]
  readonly rotation?: number
}

export interface RegularPolygonShapeConfig extends ShapeConfig {
  readonly borderRadiuses: number[]
  readonly circumradius?: string
  readonly rotation?: number
}

export const shapes = {
  Color: {
    color: color,
    ...Generator
  },

  LinearGradient: {
    colors: colorVector,
    stops: scalarVector,
    start: position,
    end: position,
    ...Generator
  },

  RadialGradient: {
    colors: colorVector,
    stops: scalarVector,
    center: position,
    radius: distance,
    ...Generator
  },

  SweepGradient: {
    colors: colorVector,
    stops: scalarVector,
    center: position,
    ...Generator
  },

  TextImage: {
    text: text,
    fontName: text,
    fontSize: distance,
    color: color,
    ...Generator
  },

  CircleShape: {
    radius: distance,
    color: color,
    ...Generator
  },

  OvalShape: {
    radiusX: distance,
    radiusY: distance,
    rotation: scalar,
    color: color,
    ...Generator
  },

  PathShape: {
    path: path,
    rotation: scalar,
    color: color,
    ...Generator
  },

  RegularPolygonShape: {
    circumradius: distance,
    borderRadiuses: distanceVector,
    rotation: scalar,
    color: color,
    ...Generator
  }
}
