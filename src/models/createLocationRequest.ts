import { lazy, object, optional, Schema } from '../schema';
import { Location, locationSchema } from './location';

/** Request object for the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationRequest {
  location?: Location;
}

export const createLocationRequestSchema: Schema<CreateLocationRequest> = object(
  { location: ['location', optional(lazy(() => locationSchema))] }
);
