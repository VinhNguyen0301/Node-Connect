/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface BoxInterface extends Interface {
  getFunction(nameOrSignature: "retrieve" | "store"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ValueChanged"): EventFragment;

  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(functionFragment: "store", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
}

export namespace ValueChangedEvent {
  export type InputTuple = [value: BigNumberish];
  export type OutputTuple = [value: bigint];
  export interface OutputObject {
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Box extends BaseContract {
  connect(runner?: ContractRunner | null): Box;
  waitForDeployment(): Promise<this>;

  interface: BoxInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  retrieve: TypedContractMethod<[], [bigint], "view">;

  store: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "retrieve"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "store"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ValueChanged"
  ): TypedContractEvent<
    ValueChangedEvent.InputTuple,
    ValueChangedEvent.OutputTuple,
    ValueChangedEvent.OutputObject
  >;

  filters: {
    "ValueChanged(uint256)": TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
    ValueChanged: TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
  };
}
