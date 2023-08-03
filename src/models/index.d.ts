import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPerfil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Perfil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly municipio?: string | null;
  readonly genero?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerfil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Perfil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly municipio?: string | null;
  readonly genero?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Perfil = LazyLoading extends LazyLoadingDisabled ? EagerPerfil : LazyPerfil

export declare const Perfil: (new (init: ModelInit<Perfil>) => Perfil) & {
  copyOf(source: Perfil, mutator: (draft: MutableModel<Perfil>) => MutableModel<Perfil> | void): Perfil;
}