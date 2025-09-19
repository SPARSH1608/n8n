
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Credential
 * 
 */
export type Credential = $Result.DefaultSelection<Prisma.$CredentialPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowNode
 * 
 */
export type WorkflowNode = $Result.DefaultSelection<Prisma.$WorkflowNodePayload>
/**
 * Model WorkflowNodeLink
 * 
 */
export type WorkflowNodeLink = $Result.DefaultSelection<Prisma.$WorkflowNodeLinkPayload>
/**
 * Model ExecutionHistory
 * 
 */
export type ExecutionHistory = $Result.DefaultSelection<Prisma.$ExecutionHistoryPayload>
/**
 * Model NodeExecutionHistory
 * 
 */
export type NodeExecutionHistory = $Result.DefaultSelection<Prisma.$NodeExecutionHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **Credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.CredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowNode`: Exposes CRUD operations for the **WorkflowNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowNodes
    * const workflowNodes = await prisma.workflowNode.findMany()
    * ```
    */
  get workflowNode(): Prisma.WorkflowNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowNodeLink`: Exposes CRUD operations for the **WorkflowNodeLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowNodeLinks
    * const workflowNodeLinks = await prisma.workflowNodeLink.findMany()
    * ```
    */
  get workflowNodeLink(): Prisma.WorkflowNodeLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionHistory`: Exposes CRUD operations for the **ExecutionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionHistories
    * const executionHistories = await prisma.executionHistory.findMany()
    * ```
    */
  get executionHistory(): Prisma.ExecutionHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nodeExecutionHistory`: Exposes CRUD operations for the **NodeExecutionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NodeExecutionHistories
    * const nodeExecutionHistories = await prisma.nodeExecutionHistory.findMany()
    * ```
    */
  get nodeExecutionHistory(): Prisma.NodeExecutionHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Credential: 'Credential',
    Workflow: 'Workflow',
    WorkflowNode: 'WorkflowNode',
    WorkflowNodeLink: 'WorkflowNodeLink',
    ExecutionHistory: 'ExecutionHistory',
    NodeExecutionHistory: 'NodeExecutionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "credential" | "workflow" | "workflowNode" | "workflowNodeLink" | "executionHistory" | "nodeExecutionHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Credential: {
        payload: Prisma.$CredentialPayload<ExtArgs>
        fields: Prisma.CredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findFirst: {
            args: Prisma.CredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          findMany: {
            args: Prisma.CredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          create: {
            args: Prisma.CredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          createMany: {
            args: Prisma.CredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          delete: {
            args: Prisma.CredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          update: {
            args: Prisma.CredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          deleteMany: {
            args: Prisma.CredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>[]
          }
          upsert: {
            args: Prisma.CredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialPayload>
          }
          aggregate: {
            args: Prisma.CredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: Prisma.CredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowNode: {
        payload: Prisma.$WorkflowNodePayload<ExtArgs>
        fields: Prisma.WorkflowNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findFirst: {
            args: Prisma.WorkflowNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findMany: {
            args: Prisma.WorkflowNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          create: {
            args: Prisma.WorkflowNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          createMany: {
            args: Prisma.WorkflowNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          delete: {
            args: Prisma.WorkflowNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          update: {
            args: Prisma.WorkflowNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          deleteMany: {
            args: Prisma.WorkflowNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          upsert: {
            args: Prisma.WorkflowNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          aggregate: {
            args: Prisma.WorkflowNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowNode>
          }
          groupBy: {
            args: Prisma.WorkflowNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowNodeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeCountAggregateOutputType> | number
          }
        }
      }
      WorkflowNodeLink: {
        payload: Prisma.$WorkflowNodeLinkPayload<ExtArgs>
        fields: Prisma.WorkflowNodeLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowNodeLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowNodeLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          findFirst: {
            args: Prisma.WorkflowNodeLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowNodeLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          findMany: {
            args: Prisma.WorkflowNodeLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>[]
          }
          create: {
            args: Prisma.WorkflowNodeLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          createMany: {
            args: Prisma.WorkflowNodeLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowNodeLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>[]
          }
          delete: {
            args: Prisma.WorkflowNodeLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          update: {
            args: Prisma.WorkflowNodeLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowNodeLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowNodeLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowNodeLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowNodeLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodeLinkPayload>
          }
          aggregate: {
            args: Prisma.WorkflowNodeLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowNodeLink>
          }
          groupBy: {
            args: Prisma.WorkflowNodeLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowNodeLinkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeLinkCountAggregateOutputType> | number
          }
        }
      }
      ExecutionHistory: {
        payload: Prisma.$ExecutionHistoryPayload<ExtArgs>
        fields: Prisma.ExecutionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ExecutionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findMany: {
            args: Prisma.ExecutionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          create: {
            args: Prisma.ExecutionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          createMany: {
            args: Prisma.ExecutionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          delete: {
            args: Prisma.ExecutionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          update: {
            args: Prisma.ExecutionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ExecutionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionHistory>
          }
          groupBy: {
            args: Prisma.ExecutionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryCountAggregateOutputType> | number
          }
        }
      }
      NodeExecutionHistory: {
        payload: Prisma.$NodeExecutionHistoryPayload<ExtArgs>
        fields: Prisma.NodeExecutionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeExecutionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          findFirst: {
            args: Prisma.NodeExecutionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeExecutionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          findMany: {
            args: Prisma.NodeExecutionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>[]
          }
          create: {
            args: Prisma.NodeExecutionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          createMany: {
            args: Prisma.NodeExecutionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeExecutionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>[]
          }
          delete: {
            args: Prisma.NodeExecutionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          update: {
            args: Prisma.NodeExecutionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.NodeExecutionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeExecutionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.NodeExecutionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodeExecutionHistoryPayload>
          }
          aggregate: {
            args: Prisma.NodeExecutionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNodeExecutionHistory>
          }
          groupBy: {
            args: Prisma.NodeExecutionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeExecutionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeExecutionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<NodeExecutionHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    credential?: CredentialOmit
    workflow?: WorkflowOmit
    workflowNode?: WorkflowNodeOmit
    workflowNodeLink?: WorkflowNodeLinkOmit
    executionHistory?: ExecutionHistoryOmit
    nodeExecutionHistory?: NodeExecutionHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workflows: number
    credentials: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
    credentials?: boolean | UserCountOutputTypeCountCredentialsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    nodes: number
    nodeLinks: number
    executionHistories: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | WorkflowCountOutputTypeCountNodesArgs
    nodeLinks?: boolean | WorkflowCountOutputTypeCountNodeLinksArgs
    executionHistories?: boolean | WorkflowCountOutputTypeCountExecutionHistoriesArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountNodeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeLinkWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountExecutionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
  }


  /**
   * Count Type WorkflowNodeCountOutputType
   */

  export type WorkflowNodeCountOutputType = {
    outgoingLinks: number
    incomingLinks: number
  }

  export type WorkflowNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outgoingLinks?: boolean | WorkflowNodeCountOutputTypeCountOutgoingLinksArgs
    incomingLinks?: boolean | WorkflowNodeCountOutputTypeCountIncomingLinksArgs
  }

  // Custom InputTypes
  /**
   * WorkflowNodeCountOutputType without action
   */
  export type WorkflowNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeCountOutputType
     */
    select?: WorkflowNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowNodeCountOutputType without action
   */
  export type WorkflowNodeCountOutputTypeCountOutgoingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeLinkWhereInput
  }

  /**
   * WorkflowNodeCountOutputType without action
   */
  export type WorkflowNodeCountOutputTypeCountIncomingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeLinkWhereInput
  }


  /**
   * Count Type ExecutionHistoryCountOutputType
   */

  export type ExecutionHistoryCountOutputType = {
    nodeExecutionHistories: number
  }

  export type ExecutionHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodeExecutionHistories?: boolean | ExecutionHistoryCountOutputTypeCountNodeExecutionHistoriesArgs
  }

  // Custom InputTypes
  /**
   * ExecutionHistoryCountOutputType without action
   */
  export type ExecutionHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistoryCountOutputType
     */
    select?: ExecutionHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutionHistoryCountOutputType without action
   */
  export type ExecutionHistoryCountOutputTypeCountNodeExecutionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeExecutionHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      credentials: Prisma.$CredentialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credentials<T extends User$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User.credentials
   */
  export type User$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    cursor?: CredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Credential
   */

  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credential to aggregate.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type CredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialWhereInput
    orderBy?: CredentialOrderByWithAggregationInput | CredentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: CredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: string
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends CredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type CredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credential"]>

  export type CredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["credential"]>
  export type CredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: string
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }

  type CredentialGetPayload<S extends boolean | null | undefined | CredentialDefaultArgs> = $Result.GetResult<Prisma.$CredentialPayload, S>

  type CredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface CredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credential'], meta: { name: 'Credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {CredentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialFindUniqueArgs>(args: SelectSubset<T, CredentialFindUniqueArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialFindFirstArgs>(args?: SelectSubset<T, CredentialFindFirstArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialFindManyArgs>(args?: SelectSubset<T, CredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credential.
     * @param {CredentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
     */
    create<T extends CredentialCreateArgs>(args: SelectSubset<T, CredentialCreateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {CredentialCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialCreateManyArgs>(args?: SelectSubset<T, CredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {CredentialCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credential.
     * @param {CredentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
     */
    delete<T extends CredentialDeleteArgs>(args: SelectSubset<T, CredentialDeleteArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credential.
     * @param {CredentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialUpdateArgs>(args: SelectSubset<T, CredentialUpdateArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {CredentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialDeleteManyArgs>(args?: SelectSubset<T, CredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialUpdateManyArgs>(args: SelectSubset<T, CredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {CredentialUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credential.
     * @param {CredentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
     */
    upsert<T extends CredentialUpsertArgs>(args: SelectSubset<T, CredentialUpsertArgs<ExtArgs>>): Prisma__CredentialClient<$Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends CredentialCountArgs>(
      args?: Subset<T, CredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): Prisma.PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialGroupByArgs['orderBy'] }
        : { orderBy?: CredentialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credential model
   */
  readonly fields: CredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Credential model
   */
  interface CredentialFieldRefs {
    readonly id: FieldRef<"Credential", 'String'>
    readonly userId: FieldRef<"Credential", 'String'>
    readonly name: FieldRef<"Credential", 'String'>
    readonly type: FieldRef<"Credential", 'String'>
    readonly data: FieldRef<"Credential", 'Json'>
    readonly createdAt: FieldRef<"Credential", 'DateTime'>
    readonly updatedAt: FieldRef<"Credential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credential findUnique
   */
  export type CredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findUniqueOrThrow
   */
  export type CredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential findFirst
   */
  export type CredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findFirstOrThrow
   */
  export type CredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credential to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential findMany
   */
  export type CredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter, which Credentials to fetch.
     */
    where?: CredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credentials to fetch.
     */
    orderBy?: CredentialOrderByWithRelationInput | CredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credentials.
     */
    cursor?: CredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credentials.
     */
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * Credential create
   */
  export type CredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a Credential.
     */
    data: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
  }

  /**
   * Credential createMany
   */
  export type CredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credential createManyAndReturn
   */
  export type CredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to create many Credentials.
     */
    data: CredentialCreateManyInput | CredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential update
   */
  export type CredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a Credential.
     */
    data: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
    /**
     * Choose, which Credential to update.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential updateMany
   */
  export type CredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
  }

  /**
   * Credential updateManyAndReturn
   */
  export type CredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * The data used to update Credentials.
     */
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyInput>
    /**
     * Filter which Credentials to update
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Credential upsert
   */
  export type CredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the Credential to update in case it exists.
     */
    where: CredentialWhereUniqueInput
    /**
     * In case the Credential found by the `where` argument doesn't exist, create a new Credential with this data.
     */
    create: XOR<CredentialCreateInput, CredentialUncheckedCreateInput>
    /**
     * In case the Credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialUpdateInput, CredentialUncheckedUpdateInput>
  }

  /**
   * Credential delete
   */
  export type CredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
    /**
     * Filter which Credential to delete.
     */
    where: CredentialWhereUniqueInput
  }

  /**
   * Credential deleteMany
   */
  export type CredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credentials to delete
     */
    where?: CredentialWhereInput
    /**
     * Limit how many Credentials to delete.
     */
    limit?: number
  }

  /**
   * Credential without action
   */
  export type CredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credential
     */
    select?: CredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credential
     */
    omit?: CredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    trigger: string | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    trigger: string | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    trigger: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    trigger?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    trigger?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    trigger?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    trigger: string
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trigger?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    nodeLinks?: boolean | Workflow$nodeLinksArgs<ExtArgs>
    executionHistories?: boolean | Workflow$executionHistoriesArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trigger?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trigger?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trigger?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "isActive" | "createdAt" | "updatedAt" | "trigger", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    nodeLinks?: boolean | Workflow$nodeLinksArgs<ExtArgs>
    executionHistories?: boolean | Workflow$executionHistoriesArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nodes: Prisma.$WorkflowNodePayload<ExtArgs>[]
      nodeLinks: Prisma.$WorkflowNodeLinkPayload<ExtArgs>[]
      executionHistories: Prisma.$ExecutionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      trigger: string
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends Workflow$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nodeLinks<T extends Workflow$nodeLinksArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$nodeLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    executionHistories<T extends Workflow$executionHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$executionHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly isActive: FieldRef<"Workflow", 'Boolean'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
    readonly trigger: FieldRef<"Workflow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.nodes
   */
  export type Workflow$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    where?: WorkflowNodeWhereInput
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    cursor?: WorkflowNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * Workflow.nodeLinks
   */
  export type Workflow$nodeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    where?: WorkflowNodeLinkWhereInput
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    cursor?: WorkflowNodeLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * Workflow.executionHistories
   */
  export type Workflow$executionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    cursor?: ExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowNode
   */

  export type AggregateWorkflowNode = {
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  export type WorkflowNodeAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type WorkflowNodeSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type WorkflowNodeMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    positionX: number | null
    positionY: number | null
    createdAt: Date | null
    updatedAt: Date | null
    credentialId: string | null
    trigger: string | null
  }

  export type WorkflowNodeMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    positionX: number | null
    positionY: number | null
    createdAt: Date | null
    updatedAt: Date | null
    credentialId: string | null
    trigger: string | null
  }

  export type WorkflowNodeCountAggregateOutputType = {
    id: number
    workflowId: number
    type: number
    parameters: number
    positionX: number
    positionY: number
    createdAt: number
    updatedAt: number
    credentialId: number
    trigger: number
    _all: number
  }


  export type WorkflowNodeAvgAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type WorkflowNodeSumAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type WorkflowNodeMinAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    positionX?: true
    positionY?: true
    createdAt?: true
    updatedAt?: true
    credentialId?: true
    trigger?: true
  }

  export type WorkflowNodeMaxAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    positionX?: true
    positionY?: true
    createdAt?: true
    updatedAt?: true
    credentialId?: true
    trigger?: true
  }

  export type WorkflowNodeCountAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    parameters?: true
    positionX?: true
    positionY?: true
    createdAt?: true
    updatedAt?: true
    credentialId?: true
    trigger?: true
    _all?: true
  }

  export type WorkflowNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNode to aggregate.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowNodes
    **/
    _count?: true | WorkflowNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type GetWorkflowNodeAggregateType<T extends WorkflowNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowNode[P]>
      : GetScalarType<T[P], AggregateWorkflowNode[P]>
  }




  export type WorkflowNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeWhereInput
    orderBy?: WorkflowNodeOrderByWithAggregationInput | WorkflowNodeOrderByWithAggregationInput[]
    by: WorkflowNodeScalarFieldEnum[] | WorkflowNodeScalarFieldEnum
    having?: WorkflowNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowNodeCountAggregateInputType | true
    _avg?: WorkflowNodeAvgAggregateInputType
    _sum?: WorkflowNodeSumAggregateInputType
    _min?: WorkflowNodeMinAggregateInputType
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type WorkflowNodeGroupByOutputType = {
    id: string
    workflowId: string
    type: string
    parameters: JsonValue
    positionX: number | null
    positionY: number | null
    createdAt: Date
    updatedAt: Date
    credentialId: string | null
    trigger: string
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  type GetWorkflowNodeGroupByPayload<T extends WorkflowNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    parameters?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentialId?: boolean
    trigger?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    outgoingLinks?: boolean | WorkflowNode$outgoingLinksArgs<ExtArgs>
    incomingLinks?: boolean | WorkflowNode$incomingLinksArgs<ExtArgs>
    _count?: boolean | WorkflowNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    parameters?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentialId?: boolean
    trigger?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    parameters?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentialId?: boolean
    trigger?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectScalar = {
    id?: boolean
    workflowId?: boolean
    type?: boolean
    parameters?: boolean
    positionX?: boolean
    positionY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credentialId?: boolean
    trigger?: boolean
  }

  export type WorkflowNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "type" | "parameters" | "positionX" | "positionY" | "createdAt" | "updatedAt" | "credentialId" | "trigger", ExtArgs["result"]["workflowNode"]>
  export type WorkflowNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    outgoingLinks?: boolean | WorkflowNode$outgoingLinksArgs<ExtArgs>
    incomingLinks?: boolean | WorkflowNode$incomingLinksArgs<ExtArgs>
    _count?: boolean | WorkflowNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowNode"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      outgoingLinks: Prisma.$WorkflowNodeLinkPayload<ExtArgs>[]
      incomingLinks: Prisma.$WorkflowNodeLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      type: string
      parameters: Prisma.JsonValue
      positionX: number | null
      positionY: number | null
      createdAt: Date
      updatedAt: Date
      credentialId: string | null
      trigger: string
    }, ExtArgs["result"]["workflowNode"]>
    composites: {}
  }

  type WorkflowNodeGetPayload<S extends boolean | null | undefined | WorkflowNodeDefaultArgs> = $Result.GetResult<Prisma.$WorkflowNodePayload, S>

  type WorkflowNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowNodeCountAggregateInputType | true
    }

  export interface WorkflowNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowNode'], meta: { name: 'WorkflowNode' } }
    /**
     * Find zero or one WorkflowNode that matches the filter.
     * @param {WorkflowNodeFindUniqueArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowNodeFindUniqueArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowNodeFindUniqueOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowNodeFindFirstArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany()
     * 
     * // Get first 10 WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowNodeFindManyArgs>(args?: SelectSubset<T, WorkflowNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowNode.
     * @param {WorkflowNodeCreateArgs} args - Arguments to create a WorkflowNode.
     * @example
     * // Create one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.create({
     *   data: {
     *     // ... data to create a WorkflowNode
     *   }
     * })
     * 
     */
    create<T extends WorkflowNodeCreateArgs>(args: SelectSubset<T, WorkflowNodeCreateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowNodes.
     * @param {WorkflowNodeCreateManyArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowNodeCreateManyArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowNodes and returns the data saved in the database.
     * @param {WorkflowNodeCreateManyAndReturnArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowNodes and only return the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowNode.
     * @param {WorkflowNodeDeleteArgs} args - Arguments to delete one WorkflowNode.
     * @example
     * // Delete one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.delete({
     *   where: {
     *     // ... filter to delete one WorkflowNode
     *   }
     * })
     * 
     */
    delete<T extends WorkflowNodeDeleteArgs>(args: SelectSubset<T, WorkflowNodeDeleteArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowNode.
     * @param {WorkflowNodeUpdateArgs} args - Arguments to update one WorkflowNode.
     * @example
     * // Update one WorkflowNode
     * const workflowNode = await prisma.workflowNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowNodeUpdateArgs>(args: SelectSubset<T, WorkflowNodeUpdateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowNodes.
     * @param {WorkflowNodeDeleteManyArgs} args - Arguments to filter WorkflowNodes to delete.
     * @example
     * // Delete a few WorkflowNodes
     * const { count } = await prisma.workflowNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowNodeDeleteManyArgs>(args?: SelectSubset<T, WorkflowNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowNodeUpdateManyArgs>(args: SelectSubset<T, WorkflowNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodes and returns the data updated in the database.
     * @param {WorkflowNodeUpdateManyAndReturnArgs} args - Arguments to update many WorkflowNodes.
     * @example
     * // Update many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowNodes and only return the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowNode.
     * @param {WorkflowNodeUpsertArgs} args - Arguments to update or create a WorkflowNode.
     * @example
     * // Update or create a WorkflowNode
     * const workflowNode = await prisma.workflowNode.upsert({
     *   create: {
     *     // ... data to create a WorkflowNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowNode we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowNodeUpsertArgs>(args: SelectSubset<T, WorkflowNodeUpsertArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeCountArgs} args - Arguments to filter WorkflowNodes to count.
     * @example
     * // Count the number of WorkflowNodes
     * const count = await prisma.workflowNode.count({
     *   where: {
     *     // ... the filter for the WorkflowNodes we want to count
     *   }
     * })
    **/
    count<T extends WorkflowNodeCountArgs>(
      args?: Subset<T, WorkflowNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowNodeAggregateArgs>(args: Subset<T, WorkflowNodeAggregateArgs>): Prisma.PrismaPromise<GetWorkflowNodeAggregateType<T>>

    /**
     * Group by WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowNodeGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowNode model
   */
  readonly fields: WorkflowNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outgoingLinks<T extends WorkflowNode$outgoingLinksArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowNode$outgoingLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomingLinks<T extends WorkflowNode$incomingLinksArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowNode$incomingLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowNode model
   */
  interface WorkflowNodeFieldRefs {
    readonly id: FieldRef<"WorkflowNode", 'String'>
    readonly workflowId: FieldRef<"WorkflowNode", 'String'>
    readonly type: FieldRef<"WorkflowNode", 'String'>
    readonly parameters: FieldRef<"WorkflowNode", 'Json'>
    readonly positionX: FieldRef<"WorkflowNode", 'Int'>
    readonly positionY: FieldRef<"WorkflowNode", 'Int'>
    readonly createdAt: FieldRef<"WorkflowNode", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowNode", 'DateTime'>
    readonly credentialId: FieldRef<"WorkflowNode", 'String'>
    readonly trigger: FieldRef<"WorkflowNode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowNode findUnique
   */
  export type WorkflowNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findUniqueOrThrow
   */
  export type WorkflowNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findFirst
   */
  export type WorkflowNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findFirstOrThrow
   */
  export type WorkflowNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findMany
   */
  export type WorkflowNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodes to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode create
   */
  export type WorkflowNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowNode.
     */
    data: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
  }

  /**
   * WorkflowNode createMany
   */
  export type WorkflowNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowNode createManyAndReturn
   */
  export type WorkflowNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNode update
   */
  export type WorkflowNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowNode.
     */
    data: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
    /**
     * Choose, which WorkflowNode to update.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode updateMany
   */
  export type WorkflowNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowNodes.
     */
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodes to update
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to update.
     */
    limit?: number
  }

  /**
   * WorkflowNode updateManyAndReturn
   */
  export type WorkflowNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowNodes.
     */
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodes to update
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNode upsert
   */
  export type WorkflowNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowNode to update in case it exists.
     */
    where: WorkflowNodeWhereUniqueInput
    /**
     * In case the WorkflowNode found by the `where` argument doesn't exist, create a new WorkflowNode with this data.
     */
    create: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
    /**
     * In case the WorkflowNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
  }

  /**
   * WorkflowNode delete
   */
  export type WorkflowNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter which WorkflowNode to delete.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode deleteMany
   */
  export type WorkflowNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNodes to delete
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to delete.
     */
    limit?: number
  }

  /**
   * WorkflowNode.outgoingLinks
   */
  export type WorkflowNode$outgoingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    where?: WorkflowNodeLinkWhereInput
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    cursor?: WorkflowNodeLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * WorkflowNode.incomingLinks
   */
  export type WorkflowNode$incomingLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    where?: WorkflowNodeLinkWhereInput
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    cursor?: WorkflowNodeLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * WorkflowNode without action
   */
  export type WorkflowNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowNodeLink
   */

  export type AggregateWorkflowNodeLink = {
    _count: WorkflowNodeLinkCountAggregateOutputType | null
    _min: WorkflowNodeLinkMinAggregateOutputType | null
    _max: WorkflowNodeLinkMaxAggregateOutputType | null
  }

  export type WorkflowNodeLinkMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    fromNodeId: string | null
    toNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowNodeLinkMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    fromNodeId: string | null
    toNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowNodeLinkCountAggregateOutputType = {
    id: number
    workflowId: number
    fromNodeId: number
    toNodeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowNodeLinkMinAggregateInputType = {
    id?: true
    workflowId?: true
    fromNodeId?: true
    toNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowNodeLinkMaxAggregateInputType = {
    id?: true
    workflowId?: true
    fromNodeId?: true
    toNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowNodeLinkCountAggregateInputType = {
    id?: true
    workflowId?: true
    fromNodeId?: true
    toNodeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowNodeLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNodeLink to aggregate.
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodeLinks to fetch.
     */
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowNodeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowNodeLinks
    **/
    _count?: true | WorkflowNodeLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowNodeLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowNodeLinkMaxAggregateInputType
  }

  export type GetWorkflowNodeLinkAggregateType<T extends WorkflowNodeLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowNodeLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowNodeLink[P]>
      : GetScalarType<T[P], AggregateWorkflowNodeLink[P]>
  }




  export type WorkflowNodeLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeLinkWhereInput
    orderBy?: WorkflowNodeLinkOrderByWithAggregationInput | WorkflowNodeLinkOrderByWithAggregationInput[]
    by: WorkflowNodeLinkScalarFieldEnum[] | WorkflowNodeLinkScalarFieldEnum
    having?: WorkflowNodeLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowNodeLinkCountAggregateInputType | true
    _min?: WorkflowNodeLinkMinAggregateInputType
    _max?: WorkflowNodeLinkMaxAggregateInputType
  }

  export type WorkflowNodeLinkGroupByOutputType = {
    id: string
    workflowId: string
    fromNodeId: string
    toNodeId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkflowNodeLinkCountAggregateOutputType | null
    _min: WorkflowNodeLinkMinAggregateOutputType | null
    _max: WorkflowNodeLinkMaxAggregateOutputType | null
  }

  type GetWorkflowNodeLinkGroupByPayload<T extends WorkflowNodeLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowNodeLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowNodeLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowNodeLinkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowNodeLinkGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowNodeLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNodeLink"]>

  export type WorkflowNodeLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNodeLink"]>

  export type WorkflowNodeLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNodeLink"]>

  export type WorkflowNodeLinkSelectScalar = {
    id?: boolean
    workflowId?: boolean
    fromNodeId?: boolean
    toNodeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowNodeLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "fromNodeId" | "toNodeId" | "createdAt" | "updatedAt", ExtArgs["result"]["workflowNodeLink"]>
  export type WorkflowNodeLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    fromNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
    toNode?: boolean | WorkflowNodeDefaultArgs<ExtArgs>
  }

  export type $WorkflowNodeLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowNodeLink"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      fromNode: Prisma.$WorkflowNodePayload<ExtArgs>
      toNode: Prisma.$WorkflowNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      fromNodeId: string
      toNodeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowNodeLink"]>
    composites: {}
  }

  type WorkflowNodeLinkGetPayload<S extends boolean | null | undefined | WorkflowNodeLinkDefaultArgs> = $Result.GetResult<Prisma.$WorkflowNodeLinkPayload, S>

  type WorkflowNodeLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowNodeLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowNodeLinkCountAggregateInputType | true
    }

  export interface WorkflowNodeLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowNodeLink'], meta: { name: 'WorkflowNodeLink' } }
    /**
     * Find zero or one WorkflowNodeLink that matches the filter.
     * @param {WorkflowNodeLinkFindUniqueArgs} args - Arguments to find a WorkflowNodeLink
     * @example
     * // Get one WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowNodeLinkFindUniqueArgs>(args: SelectSubset<T, WorkflowNodeLinkFindUniqueArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowNodeLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowNodeLinkFindUniqueOrThrowArgs} args - Arguments to find a WorkflowNodeLink
     * @example
     * // Get one WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowNodeLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowNodeLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNodeLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkFindFirstArgs} args - Arguments to find a WorkflowNodeLink
     * @example
     * // Get one WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowNodeLinkFindFirstArgs>(args?: SelectSubset<T, WorkflowNodeLinkFindFirstArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNodeLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkFindFirstOrThrowArgs} args - Arguments to find a WorkflowNodeLink
     * @example
     * // Get one WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowNodeLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowNodeLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowNodeLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowNodeLinks
     * const workflowNodeLinks = await prisma.workflowNodeLink.findMany()
     * 
     * // Get first 10 WorkflowNodeLinks
     * const workflowNodeLinks = await prisma.workflowNodeLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowNodeLinkWithIdOnly = await prisma.workflowNodeLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowNodeLinkFindManyArgs>(args?: SelectSubset<T, WorkflowNodeLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowNodeLink.
     * @param {WorkflowNodeLinkCreateArgs} args - Arguments to create a WorkflowNodeLink.
     * @example
     * // Create one WorkflowNodeLink
     * const WorkflowNodeLink = await prisma.workflowNodeLink.create({
     *   data: {
     *     // ... data to create a WorkflowNodeLink
     *   }
     * })
     * 
     */
    create<T extends WorkflowNodeLinkCreateArgs>(args: SelectSubset<T, WorkflowNodeLinkCreateArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowNodeLinks.
     * @param {WorkflowNodeLinkCreateManyArgs} args - Arguments to create many WorkflowNodeLinks.
     * @example
     * // Create many WorkflowNodeLinks
     * const workflowNodeLink = await prisma.workflowNodeLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowNodeLinkCreateManyArgs>(args?: SelectSubset<T, WorkflowNodeLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowNodeLinks and returns the data saved in the database.
     * @param {WorkflowNodeLinkCreateManyAndReturnArgs} args - Arguments to create many WorkflowNodeLinks.
     * @example
     * // Create many WorkflowNodeLinks
     * const workflowNodeLink = await prisma.workflowNodeLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowNodeLinks and only return the `id`
     * const workflowNodeLinkWithIdOnly = await prisma.workflowNodeLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowNodeLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowNodeLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowNodeLink.
     * @param {WorkflowNodeLinkDeleteArgs} args - Arguments to delete one WorkflowNodeLink.
     * @example
     * // Delete one WorkflowNodeLink
     * const WorkflowNodeLink = await prisma.workflowNodeLink.delete({
     *   where: {
     *     // ... filter to delete one WorkflowNodeLink
     *   }
     * })
     * 
     */
    delete<T extends WorkflowNodeLinkDeleteArgs>(args: SelectSubset<T, WorkflowNodeLinkDeleteArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowNodeLink.
     * @param {WorkflowNodeLinkUpdateArgs} args - Arguments to update one WorkflowNodeLink.
     * @example
     * // Update one WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowNodeLinkUpdateArgs>(args: SelectSubset<T, WorkflowNodeLinkUpdateArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowNodeLinks.
     * @param {WorkflowNodeLinkDeleteManyArgs} args - Arguments to filter WorkflowNodeLinks to delete.
     * @example
     * // Delete a few WorkflowNodeLinks
     * const { count } = await prisma.workflowNodeLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowNodeLinkDeleteManyArgs>(args?: SelectSubset<T, WorkflowNodeLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodeLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowNodeLinks
     * const workflowNodeLink = await prisma.workflowNodeLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowNodeLinkUpdateManyArgs>(args: SelectSubset<T, WorkflowNodeLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodeLinks and returns the data updated in the database.
     * @param {WorkflowNodeLinkUpdateManyAndReturnArgs} args - Arguments to update many WorkflowNodeLinks.
     * @example
     * // Update many WorkflowNodeLinks
     * const workflowNodeLink = await prisma.workflowNodeLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowNodeLinks and only return the `id`
     * const workflowNodeLinkWithIdOnly = await prisma.workflowNodeLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowNodeLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowNodeLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowNodeLink.
     * @param {WorkflowNodeLinkUpsertArgs} args - Arguments to update or create a WorkflowNodeLink.
     * @example
     * // Update or create a WorkflowNodeLink
     * const workflowNodeLink = await prisma.workflowNodeLink.upsert({
     *   create: {
     *     // ... data to create a WorkflowNodeLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowNodeLink we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowNodeLinkUpsertArgs>(args: SelectSubset<T, WorkflowNodeLinkUpsertArgs<ExtArgs>>): Prisma__WorkflowNodeLinkClient<$Result.GetResult<Prisma.$WorkflowNodeLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowNodeLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkCountArgs} args - Arguments to filter WorkflowNodeLinks to count.
     * @example
     * // Count the number of WorkflowNodeLinks
     * const count = await prisma.workflowNodeLink.count({
     *   where: {
     *     // ... the filter for the WorkflowNodeLinks we want to count
     *   }
     * })
    **/
    count<T extends WorkflowNodeLinkCountArgs>(
      args?: Subset<T, WorkflowNodeLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowNodeLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowNodeLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowNodeLinkAggregateArgs>(args: Subset<T, WorkflowNodeLinkAggregateArgs>): Prisma.PrismaPromise<GetWorkflowNodeLinkAggregateType<T>>

    /**
     * Group by WorkflowNodeLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowNodeLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowNodeLinkGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowNodeLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowNodeLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowNodeLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowNodeLink model
   */
  readonly fields: WorkflowNodeLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowNodeLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowNodeLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromNode<T extends WorkflowNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowNodeDefaultArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toNode<T extends WorkflowNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowNodeDefaultArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowNodeLink model
   */
  interface WorkflowNodeLinkFieldRefs {
    readonly id: FieldRef<"WorkflowNodeLink", 'String'>
    readonly workflowId: FieldRef<"WorkflowNodeLink", 'String'>
    readonly fromNodeId: FieldRef<"WorkflowNodeLink", 'String'>
    readonly toNodeId: FieldRef<"WorkflowNodeLink", 'String'>
    readonly createdAt: FieldRef<"WorkflowNodeLink", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowNodeLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowNodeLink findUnique
   */
  export type WorkflowNodeLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodeLink to fetch.
     */
    where: WorkflowNodeLinkWhereUniqueInput
  }

  /**
   * WorkflowNodeLink findUniqueOrThrow
   */
  export type WorkflowNodeLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodeLink to fetch.
     */
    where: WorkflowNodeLinkWhereUniqueInput
  }

  /**
   * WorkflowNodeLink findFirst
   */
  export type WorkflowNodeLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodeLink to fetch.
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodeLinks to fetch.
     */
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodeLinks.
     */
    cursor?: WorkflowNodeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodeLinks.
     */
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * WorkflowNodeLink findFirstOrThrow
   */
  export type WorkflowNodeLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodeLink to fetch.
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodeLinks to fetch.
     */
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodeLinks.
     */
    cursor?: WorkflowNodeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodeLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodeLinks.
     */
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * WorkflowNodeLink findMany
   */
  export type WorkflowNodeLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodeLinks to fetch.
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodeLinks to fetch.
     */
    orderBy?: WorkflowNodeLinkOrderByWithRelationInput | WorkflowNodeLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowNodeLinks.
     */
    cursor?: WorkflowNodeLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodeLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodeLinks.
     */
    skip?: number
    distinct?: WorkflowNodeLinkScalarFieldEnum | WorkflowNodeLinkScalarFieldEnum[]
  }

  /**
   * WorkflowNodeLink create
   */
  export type WorkflowNodeLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowNodeLink.
     */
    data: XOR<WorkflowNodeLinkCreateInput, WorkflowNodeLinkUncheckedCreateInput>
  }

  /**
   * WorkflowNodeLink createMany
   */
  export type WorkflowNodeLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowNodeLinks.
     */
    data: WorkflowNodeLinkCreateManyInput | WorkflowNodeLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowNodeLink createManyAndReturn
   */
  export type WorkflowNodeLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowNodeLinks.
     */
    data: WorkflowNodeLinkCreateManyInput | WorkflowNodeLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNodeLink update
   */
  export type WorkflowNodeLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowNodeLink.
     */
    data: XOR<WorkflowNodeLinkUpdateInput, WorkflowNodeLinkUncheckedUpdateInput>
    /**
     * Choose, which WorkflowNodeLink to update.
     */
    where: WorkflowNodeLinkWhereUniqueInput
  }

  /**
   * WorkflowNodeLink updateMany
   */
  export type WorkflowNodeLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowNodeLinks.
     */
    data: XOR<WorkflowNodeLinkUpdateManyMutationInput, WorkflowNodeLinkUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodeLinks to update
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * Limit how many WorkflowNodeLinks to update.
     */
    limit?: number
  }

  /**
   * WorkflowNodeLink updateManyAndReturn
   */
  export type WorkflowNodeLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowNodeLinks.
     */
    data: XOR<WorkflowNodeLinkUpdateManyMutationInput, WorkflowNodeLinkUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodeLinks to update
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * Limit how many WorkflowNodeLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNodeLink upsert
   */
  export type WorkflowNodeLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowNodeLink to update in case it exists.
     */
    where: WorkflowNodeLinkWhereUniqueInput
    /**
     * In case the WorkflowNodeLink found by the `where` argument doesn't exist, create a new WorkflowNodeLink with this data.
     */
    create: XOR<WorkflowNodeLinkCreateInput, WorkflowNodeLinkUncheckedCreateInput>
    /**
     * In case the WorkflowNodeLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowNodeLinkUpdateInput, WorkflowNodeLinkUncheckedUpdateInput>
  }

  /**
   * WorkflowNodeLink delete
   */
  export type WorkflowNodeLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
    /**
     * Filter which WorkflowNodeLink to delete.
     */
    where: WorkflowNodeLinkWhereUniqueInput
  }

  /**
   * WorkflowNodeLink deleteMany
   */
  export type WorkflowNodeLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNodeLinks to delete
     */
    where?: WorkflowNodeLinkWhereInput
    /**
     * Limit how many WorkflowNodeLinks to delete.
     */
    limit?: number
  }

  /**
   * WorkflowNodeLink without action
   */
  export type WorkflowNodeLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNodeLink
     */
    select?: WorkflowNodeLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNodeLink
     */
    omit?: WorkflowNodeLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeLinkInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionHistory
   */

  export type AggregateExecutionHistory = {
    _count: ExecutionHistoryCountAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  export type ExecutionHistoryMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: string | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type ExecutionHistoryMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    status: string | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type ExecutionHistoryCountAggregateOutputType = {
    id: number
    workflowId: number
    status: number
    startedAt: number
    finishedAt: number
    log: number
    _all: number
  }


  export type ExecutionHistoryMinAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    startedAt?: true
    finishedAt?: true
  }

  export type ExecutionHistoryMaxAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    startedAt?: true
    finishedAt?: true
  }

  export type ExecutionHistoryCountAggregateInputType = {
    id?: true
    workflowId?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    log?: true
    _all?: true
  }

  export type ExecutionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistory to aggregate.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionHistories
    **/
    _count?: true | ExecutionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type GetExecutionHistoryAggregateType<T extends ExecutionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionHistory[P]>
      : GetScalarType<T[P], AggregateExecutionHistory[P]>
  }




  export type ExecutionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithAggregationInput | ExecutionHistoryOrderByWithAggregationInput[]
    by: ExecutionHistoryScalarFieldEnum[] | ExecutionHistoryScalarFieldEnum
    having?: ExecutionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionHistoryCountAggregateInputType | true
    _min?: ExecutionHistoryMinAggregateInputType
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type ExecutionHistoryGroupByOutputType = {
    id: string
    workflowId: string
    status: string
    startedAt: Date
    finishedAt: Date | null
    log: JsonValue
    _count: ExecutionHistoryCountAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  type GetExecutionHistoryGroupByPayload<T extends ExecutionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    log?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    nodeExecutionHistories?: boolean | ExecutionHistory$nodeExecutionHistoriesArgs<ExtArgs>
    _count?: boolean | ExecutionHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    log?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    log?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectScalar = {
    id?: boolean
    workflowId?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    log?: boolean
  }

  export type ExecutionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "status" | "startedAt" | "finishedAt" | "log", ExtArgs["result"]["executionHistory"]>
  export type ExecutionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    nodeExecutionHistories?: boolean | ExecutionHistory$nodeExecutionHistoriesArgs<ExtArgs>
    _count?: boolean | ExecutionHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $ExecutionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionHistory"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      nodeExecutionHistories: Prisma.$NodeExecutionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      status: string
      startedAt: Date
      finishedAt: Date | null
      log: Prisma.JsonValue
    }, ExtArgs["result"]["executionHistory"]>
    composites: {}
  }

  type ExecutionHistoryGetPayload<S extends boolean | null | undefined | ExecutionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ExecutionHistoryPayload, S>

  type ExecutionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionHistoryCountAggregateInputType | true
    }

  export interface ExecutionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionHistory'], meta: { name: 'ExecutionHistory' } }
    /**
     * Find zero or one ExecutionHistory that matches the filter.
     * @param {ExecutionHistoryFindUniqueArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionHistoryFindUniqueArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionHistoryFindFirstArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany()
     * 
     * // Get first 10 ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionHistoryFindManyArgs>(args?: SelectSubset<T, ExecutionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionHistory.
     * @param {ExecutionHistoryCreateArgs} args - Arguments to create a ExecutionHistory.
     * @example
     * // Create one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.create({
     *   data: {
     *     // ... data to create a ExecutionHistory
     *   }
     * })
     * 
     */
    create<T extends ExecutionHistoryCreateArgs>(args: SelectSubset<T, ExecutionHistoryCreateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionHistories.
     * @param {ExecutionHistoryCreateManyArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionHistoryCreateManyArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionHistories and returns the data saved in the database.
     * @param {ExecutionHistoryCreateManyAndReturnArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionHistory.
     * @param {ExecutionHistoryDeleteArgs} args - Arguments to delete one ExecutionHistory.
     * @example
     * // Delete one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.delete({
     *   where: {
     *     // ... filter to delete one ExecutionHistory
     *   }
     * })
     * 
     */
    delete<T extends ExecutionHistoryDeleteArgs>(args: SelectSubset<T, ExecutionHistoryDeleteArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionHistory.
     * @param {ExecutionHistoryUpdateArgs} args - Arguments to update one ExecutionHistory.
     * @example
     * // Update one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionHistoryUpdateArgs>(args: SelectSubset<T, ExecutionHistoryUpdateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionHistories.
     * @param {ExecutionHistoryDeleteManyArgs} args - Arguments to filter ExecutionHistories to delete.
     * @example
     * // Delete a few ExecutionHistories
     * const { count } = await prisma.executionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionHistoryDeleteManyArgs>(args?: SelectSubset<T, ExecutionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionHistoryUpdateManyArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories and returns the data updated in the database.
     * @param {ExecutionHistoryUpdateManyAndReturnArgs} args - Arguments to update many ExecutionHistories.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionHistory.
     * @param {ExecutionHistoryUpsertArgs} args - Arguments to update or create a ExecutionHistory.
     * @example
     * // Update or create a ExecutionHistory
     * const executionHistory = await prisma.executionHistory.upsert({
     *   create: {
     *     // ... data to create a ExecutionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionHistory we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionHistoryUpsertArgs>(args: SelectSubset<T, ExecutionHistoryUpsertArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryCountArgs} args - Arguments to filter ExecutionHistories to count.
     * @example
     * // Count the number of ExecutionHistories
     * const count = await prisma.executionHistory.count({
     *   where: {
     *     // ... the filter for the ExecutionHistories we want to count
     *   }
     * })
    **/
    count<T extends ExecutionHistoryCountArgs>(
      args?: Subset<T, ExecutionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionHistoryAggregateArgs>(args: Subset<T, ExecutionHistoryAggregateArgs>): Prisma.PrismaPromise<GetExecutionHistoryAggregateType<T>>

    /**
     * Group by ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionHistory model
   */
  readonly fields: ExecutionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodeExecutionHistories<T extends ExecutionHistory$nodeExecutionHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionHistory$nodeExecutionHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionHistory model
   */
  interface ExecutionHistoryFieldRefs {
    readonly id: FieldRef<"ExecutionHistory", 'String'>
    readonly workflowId: FieldRef<"ExecutionHistory", 'String'>
    readonly status: FieldRef<"ExecutionHistory", 'String'>
    readonly startedAt: FieldRef<"ExecutionHistory", 'DateTime'>
    readonly finishedAt: FieldRef<"ExecutionHistory", 'DateTime'>
    readonly log: FieldRef<"ExecutionHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionHistory findUnique
   */
  export type ExecutionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findUniqueOrThrow
   */
  export type ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findFirst
   */
  export type ExecutionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findFirstOrThrow
   */
  export type ExecutionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findMany
   */
  export type ExecutionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistories to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory create
   */
  export type ExecutionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
  }

  /**
   * ExecutionHistory createMany
   */
  export type ExecutionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionHistory createManyAndReturn
   */
  export type ExecutionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory update
   */
  export type ExecutionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ExecutionHistory to update.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory updateMany
   */
  export type ExecutionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
  }

  /**
   * ExecutionHistory updateManyAndReturn
   */
  export type ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory upsert
   */
  export type ExecutionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionHistory to update in case it exists.
     */
    where: ExecutionHistoryWhereUniqueInput
    /**
     * In case the ExecutionHistory found by the `where` argument doesn't exist, create a new ExecutionHistory with this data.
     */
    create: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
    /**
     * In case the ExecutionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
  }

  /**
   * ExecutionHistory delete
   */
  export type ExecutionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ExecutionHistory to delete.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory deleteMany
   */
  export type ExecutionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistories to delete
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to delete.
     */
    limit?: number
  }

  /**
   * ExecutionHistory.nodeExecutionHistories
   */
  export type ExecutionHistory$nodeExecutionHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    where?: NodeExecutionHistoryWhereInput
    orderBy?: NodeExecutionHistoryOrderByWithRelationInput | NodeExecutionHistoryOrderByWithRelationInput[]
    cursor?: NodeExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeExecutionHistoryScalarFieldEnum | NodeExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory without action
   */
  export type ExecutionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
  }


  /**
   * Model NodeExecutionHistory
   */

  export type AggregateNodeExecutionHistory = {
    _count: NodeExecutionHistoryCountAggregateOutputType | null
    _min: NodeExecutionHistoryMinAggregateOutputType | null
    _max: NodeExecutionHistoryMaxAggregateOutputType | null
  }

  export type NodeExecutionHistoryMinAggregateOutputType = {
    id: string | null
    workflowExecutionId: string | null
    nodeId: string | null
    status: string | null
    timestamp: Date | null
  }

  export type NodeExecutionHistoryMaxAggregateOutputType = {
    id: string | null
    workflowExecutionId: string | null
    nodeId: string | null
    status: string | null
    timestamp: Date | null
  }

  export type NodeExecutionHistoryCountAggregateOutputType = {
    id: number
    workflowExecutionId: number
    nodeId: number
    input: number
    output: number
    status: number
    timestamp: number
    _all: number
  }


  export type NodeExecutionHistoryMinAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    nodeId?: true
    status?: true
    timestamp?: true
  }

  export type NodeExecutionHistoryMaxAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    nodeId?: true
    status?: true
    timestamp?: true
  }

  export type NodeExecutionHistoryCountAggregateInputType = {
    id?: true
    workflowExecutionId?: true
    nodeId?: true
    input?: true
    output?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type NodeExecutionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeExecutionHistory to aggregate.
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeExecutionHistories to fetch.
     */
    orderBy?: NodeExecutionHistoryOrderByWithRelationInput | NodeExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NodeExecutionHistories
    **/
    _count?: true | NodeExecutionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeExecutionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeExecutionHistoryMaxAggregateInputType
  }

  export type GetNodeExecutionHistoryAggregateType<T extends NodeExecutionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNodeExecutionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNodeExecutionHistory[P]>
      : GetScalarType<T[P], AggregateNodeExecutionHistory[P]>
  }




  export type NodeExecutionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeExecutionHistoryWhereInput
    orderBy?: NodeExecutionHistoryOrderByWithAggregationInput | NodeExecutionHistoryOrderByWithAggregationInput[]
    by: NodeExecutionHistoryScalarFieldEnum[] | NodeExecutionHistoryScalarFieldEnum
    having?: NodeExecutionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeExecutionHistoryCountAggregateInputType | true
    _min?: NodeExecutionHistoryMinAggregateInputType
    _max?: NodeExecutionHistoryMaxAggregateInputType
  }

  export type NodeExecutionHistoryGroupByOutputType = {
    id: string
    workflowExecutionId: string
    nodeId: string
    input: JsonValue
    output: JsonValue
    status: string
    timestamp: Date
    _count: NodeExecutionHistoryCountAggregateOutputType | null
    _min: NodeExecutionHistoryMinAggregateOutputType | null
    _max: NodeExecutionHistoryMaxAggregateOutputType | null
  }

  type GetNodeExecutionHistoryGroupByPayload<T extends NodeExecutionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeExecutionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeExecutionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeExecutionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], NodeExecutionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type NodeExecutionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    nodeId?: boolean
    input?: boolean
    output?: boolean
    status?: boolean
    timestamp?: boolean
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeExecutionHistory"]>

  export type NodeExecutionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    nodeId?: boolean
    input?: boolean
    output?: boolean
    status?: boolean
    timestamp?: boolean
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeExecutionHistory"]>

  export type NodeExecutionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowExecutionId?: boolean
    nodeId?: boolean
    input?: boolean
    output?: boolean
    status?: boolean
    timestamp?: boolean
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nodeExecutionHistory"]>

  export type NodeExecutionHistorySelectScalar = {
    id?: boolean
    workflowExecutionId?: boolean
    nodeId?: boolean
    input?: boolean
    output?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type NodeExecutionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowExecutionId" | "nodeId" | "input" | "output" | "status" | "timestamp", ExtArgs["result"]["nodeExecutionHistory"]>
  export type NodeExecutionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }
  export type NodeExecutionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }
  export type NodeExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionHistory?: boolean | ExecutionHistoryDefaultArgs<ExtArgs>
  }

  export type $NodeExecutionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NodeExecutionHistory"
    objects: {
      executionHistory: Prisma.$ExecutionHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowExecutionId: string
      nodeId: string
      input: Prisma.JsonValue
      output: Prisma.JsonValue
      status: string
      timestamp: Date
    }, ExtArgs["result"]["nodeExecutionHistory"]>
    composites: {}
  }

  type NodeExecutionHistoryGetPayload<S extends boolean | null | undefined | NodeExecutionHistoryDefaultArgs> = $Result.GetResult<Prisma.$NodeExecutionHistoryPayload, S>

  type NodeExecutionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeExecutionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeExecutionHistoryCountAggregateInputType | true
    }

  export interface NodeExecutionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NodeExecutionHistory'], meta: { name: 'NodeExecutionHistory' } }
    /**
     * Find zero or one NodeExecutionHistory that matches the filter.
     * @param {NodeExecutionHistoryFindUniqueArgs} args - Arguments to find a NodeExecutionHistory
     * @example
     * // Get one NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeExecutionHistoryFindUniqueArgs>(args: SelectSubset<T, NodeExecutionHistoryFindUniqueArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NodeExecutionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeExecutionHistoryFindUniqueOrThrowArgs} args - Arguments to find a NodeExecutionHistory
     * @example
     * // Get one NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeExecutionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeExecutionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryFindFirstArgs} args - Arguments to find a NodeExecutionHistory
     * @example
     * // Get one NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeExecutionHistoryFindFirstArgs>(args?: SelectSubset<T, NodeExecutionHistoryFindFirstArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NodeExecutionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryFindFirstOrThrowArgs} args - Arguments to find a NodeExecutionHistory
     * @example
     * // Get one NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeExecutionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeExecutionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NodeExecutionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NodeExecutionHistories
     * const nodeExecutionHistories = await prisma.nodeExecutionHistory.findMany()
     * 
     * // Get first 10 NodeExecutionHistories
     * const nodeExecutionHistories = await prisma.nodeExecutionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeExecutionHistoryWithIdOnly = await prisma.nodeExecutionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeExecutionHistoryFindManyArgs>(args?: SelectSubset<T, NodeExecutionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NodeExecutionHistory.
     * @param {NodeExecutionHistoryCreateArgs} args - Arguments to create a NodeExecutionHistory.
     * @example
     * // Create one NodeExecutionHistory
     * const NodeExecutionHistory = await prisma.nodeExecutionHistory.create({
     *   data: {
     *     // ... data to create a NodeExecutionHistory
     *   }
     * })
     * 
     */
    create<T extends NodeExecutionHistoryCreateArgs>(args: SelectSubset<T, NodeExecutionHistoryCreateArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NodeExecutionHistories.
     * @param {NodeExecutionHistoryCreateManyArgs} args - Arguments to create many NodeExecutionHistories.
     * @example
     * // Create many NodeExecutionHistories
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeExecutionHistoryCreateManyArgs>(args?: SelectSubset<T, NodeExecutionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NodeExecutionHistories and returns the data saved in the database.
     * @param {NodeExecutionHistoryCreateManyAndReturnArgs} args - Arguments to create many NodeExecutionHistories.
     * @example
     * // Create many NodeExecutionHistories
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NodeExecutionHistories and only return the `id`
     * const nodeExecutionHistoryWithIdOnly = await prisma.nodeExecutionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeExecutionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeExecutionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NodeExecutionHistory.
     * @param {NodeExecutionHistoryDeleteArgs} args - Arguments to delete one NodeExecutionHistory.
     * @example
     * // Delete one NodeExecutionHistory
     * const NodeExecutionHistory = await prisma.nodeExecutionHistory.delete({
     *   where: {
     *     // ... filter to delete one NodeExecutionHistory
     *   }
     * })
     * 
     */
    delete<T extends NodeExecutionHistoryDeleteArgs>(args: SelectSubset<T, NodeExecutionHistoryDeleteArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NodeExecutionHistory.
     * @param {NodeExecutionHistoryUpdateArgs} args - Arguments to update one NodeExecutionHistory.
     * @example
     * // Update one NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeExecutionHistoryUpdateArgs>(args: SelectSubset<T, NodeExecutionHistoryUpdateArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NodeExecutionHistories.
     * @param {NodeExecutionHistoryDeleteManyArgs} args - Arguments to filter NodeExecutionHistories to delete.
     * @example
     * // Delete a few NodeExecutionHistories
     * const { count } = await prisma.nodeExecutionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeExecutionHistoryDeleteManyArgs>(args?: SelectSubset<T, NodeExecutionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NodeExecutionHistories
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeExecutionHistoryUpdateManyArgs>(args: SelectSubset<T, NodeExecutionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NodeExecutionHistories and returns the data updated in the database.
     * @param {NodeExecutionHistoryUpdateManyAndReturnArgs} args - Arguments to update many NodeExecutionHistories.
     * @example
     * // Update many NodeExecutionHistories
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NodeExecutionHistories and only return the `id`
     * const nodeExecutionHistoryWithIdOnly = await prisma.nodeExecutionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeExecutionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NodeExecutionHistory.
     * @param {NodeExecutionHistoryUpsertArgs} args - Arguments to update or create a NodeExecutionHistory.
     * @example
     * // Update or create a NodeExecutionHistory
     * const nodeExecutionHistory = await prisma.nodeExecutionHistory.upsert({
     *   create: {
     *     // ... data to create a NodeExecutionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NodeExecutionHistory we want to update
     *   }
     * })
     */
    upsert<T extends NodeExecutionHistoryUpsertArgs>(args: SelectSubset<T, NodeExecutionHistoryUpsertArgs<ExtArgs>>): Prisma__NodeExecutionHistoryClient<$Result.GetResult<Prisma.$NodeExecutionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NodeExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryCountArgs} args - Arguments to filter NodeExecutionHistories to count.
     * @example
     * // Count the number of NodeExecutionHistories
     * const count = await prisma.nodeExecutionHistory.count({
     *   where: {
     *     // ... the filter for the NodeExecutionHistories we want to count
     *   }
     * })
    **/
    count<T extends NodeExecutionHistoryCountArgs>(
      args?: Subset<T, NodeExecutionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeExecutionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NodeExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NodeExecutionHistoryAggregateArgs>(args: Subset<T, NodeExecutionHistoryAggregateArgs>): Prisma.PrismaPromise<GetNodeExecutionHistoryAggregateType<T>>

    /**
     * Group by NodeExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeExecutionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NodeExecutionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeExecutionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: NodeExecutionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NodeExecutionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeExecutionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NodeExecutionHistory model
   */
  readonly fields: NodeExecutionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NodeExecutionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeExecutionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executionHistory<T extends ExecutionHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionHistoryDefaultArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NodeExecutionHistory model
   */
  interface NodeExecutionHistoryFieldRefs {
    readonly id: FieldRef<"NodeExecutionHistory", 'String'>
    readonly workflowExecutionId: FieldRef<"NodeExecutionHistory", 'String'>
    readonly nodeId: FieldRef<"NodeExecutionHistory", 'String'>
    readonly input: FieldRef<"NodeExecutionHistory", 'Json'>
    readonly output: FieldRef<"NodeExecutionHistory", 'Json'>
    readonly status: FieldRef<"NodeExecutionHistory", 'String'>
    readonly timestamp: FieldRef<"NodeExecutionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NodeExecutionHistory findUnique
   */
  export type NodeExecutionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NodeExecutionHistory to fetch.
     */
    where: NodeExecutionHistoryWhereUniqueInput
  }

  /**
   * NodeExecutionHistory findUniqueOrThrow
   */
  export type NodeExecutionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NodeExecutionHistory to fetch.
     */
    where: NodeExecutionHistoryWhereUniqueInput
  }

  /**
   * NodeExecutionHistory findFirst
   */
  export type NodeExecutionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NodeExecutionHistory to fetch.
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeExecutionHistories to fetch.
     */
    orderBy?: NodeExecutionHistoryOrderByWithRelationInput | NodeExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeExecutionHistories.
     */
    cursor?: NodeExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeExecutionHistories.
     */
    distinct?: NodeExecutionHistoryScalarFieldEnum | NodeExecutionHistoryScalarFieldEnum[]
  }

  /**
   * NodeExecutionHistory findFirstOrThrow
   */
  export type NodeExecutionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NodeExecutionHistory to fetch.
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeExecutionHistories to fetch.
     */
    orderBy?: NodeExecutionHistoryOrderByWithRelationInput | NodeExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NodeExecutionHistories.
     */
    cursor?: NodeExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NodeExecutionHistories.
     */
    distinct?: NodeExecutionHistoryScalarFieldEnum | NodeExecutionHistoryScalarFieldEnum[]
  }

  /**
   * NodeExecutionHistory findMany
   */
  export type NodeExecutionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NodeExecutionHistories to fetch.
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NodeExecutionHistories to fetch.
     */
    orderBy?: NodeExecutionHistoryOrderByWithRelationInput | NodeExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NodeExecutionHistories.
     */
    cursor?: NodeExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NodeExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NodeExecutionHistories.
     */
    skip?: number
    distinct?: NodeExecutionHistoryScalarFieldEnum | NodeExecutionHistoryScalarFieldEnum[]
  }

  /**
   * NodeExecutionHistory create
   */
  export type NodeExecutionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NodeExecutionHistory.
     */
    data: XOR<NodeExecutionHistoryCreateInput, NodeExecutionHistoryUncheckedCreateInput>
  }

  /**
   * NodeExecutionHistory createMany
   */
  export type NodeExecutionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NodeExecutionHistories.
     */
    data: NodeExecutionHistoryCreateManyInput | NodeExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NodeExecutionHistory createManyAndReturn
   */
  export type NodeExecutionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many NodeExecutionHistories.
     */
    data: NodeExecutionHistoryCreateManyInput | NodeExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeExecutionHistory update
   */
  export type NodeExecutionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NodeExecutionHistory.
     */
    data: XOR<NodeExecutionHistoryUpdateInput, NodeExecutionHistoryUncheckedUpdateInput>
    /**
     * Choose, which NodeExecutionHistory to update.
     */
    where: NodeExecutionHistoryWhereUniqueInput
  }

  /**
   * NodeExecutionHistory updateMany
   */
  export type NodeExecutionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NodeExecutionHistories.
     */
    data: XOR<NodeExecutionHistoryUpdateManyMutationInput, NodeExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NodeExecutionHistories to update
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * Limit how many NodeExecutionHistories to update.
     */
    limit?: number
  }

  /**
   * NodeExecutionHistory updateManyAndReturn
   */
  export type NodeExecutionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update NodeExecutionHistories.
     */
    data: XOR<NodeExecutionHistoryUpdateManyMutationInput, NodeExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NodeExecutionHistories to update
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * Limit how many NodeExecutionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NodeExecutionHistory upsert
   */
  export type NodeExecutionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NodeExecutionHistory to update in case it exists.
     */
    where: NodeExecutionHistoryWhereUniqueInput
    /**
     * In case the NodeExecutionHistory found by the `where` argument doesn't exist, create a new NodeExecutionHistory with this data.
     */
    create: XOR<NodeExecutionHistoryCreateInput, NodeExecutionHistoryUncheckedCreateInput>
    /**
     * In case the NodeExecutionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeExecutionHistoryUpdateInput, NodeExecutionHistoryUncheckedUpdateInput>
  }

  /**
   * NodeExecutionHistory delete
   */
  export type NodeExecutionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter which NodeExecutionHistory to delete.
     */
    where: NodeExecutionHistoryWhereUniqueInput
  }

  /**
   * NodeExecutionHistory deleteMany
   */
  export type NodeExecutionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NodeExecutionHistories to delete
     */
    where?: NodeExecutionHistoryWhereInput
    /**
     * Limit how many NodeExecutionHistories to delete.
     */
    limit?: number
  }

  /**
   * NodeExecutionHistory without action
   */
  export type NodeExecutionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeExecutionHistory
     */
    select?: NodeExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NodeExecutionHistory
     */
    omit?: NodeExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeExecutionHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    trigger: 'trigger'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowNodeScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    type: 'type',
    parameters: 'parameters',
    positionX: 'positionX',
    positionY: 'positionY',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    credentialId: 'credentialId',
    trigger: 'trigger'
  };

  export type WorkflowNodeScalarFieldEnum = (typeof WorkflowNodeScalarFieldEnum)[keyof typeof WorkflowNodeScalarFieldEnum]


  export const WorkflowNodeLinkScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    fromNodeId: 'fromNodeId',
    toNodeId: 'toNodeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowNodeLinkScalarFieldEnum = (typeof WorkflowNodeLinkScalarFieldEnum)[keyof typeof WorkflowNodeLinkScalarFieldEnum]


  export const ExecutionHistoryScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    status: 'status',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    log: 'log'
  };

  export type ExecutionHistoryScalarFieldEnum = (typeof ExecutionHistoryScalarFieldEnum)[keyof typeof ExecutionHistoryScalarFieldEnum]


  export const NodeExecutionHistoryScalarFieldEnum: {
    id: 'id',
    workflowExecutionId: 'workflowExecutionId',
    nodeId: 'nodeId',
    input: 'input',
    output: 'output',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type NodeExecutionHistoryScalarFieldEnum = (typeof NodeExecutionHistoryScalarFieldEnum)[keyof typeof NodeExecutionHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workflows?: WorkflowListRelationFilter
    credentials?: CredentialListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflows?: WorkflowOrderByRelationAggregateInput
    credentials?: CredentialOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workflows?: WorkflowListRelationFilter
    credentials?: CredentialListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CredentialWhereInput = {
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    id?: StringFilter<"Credential"> | string
    userId?: StringFilter<"Credential"> | string
    name?: StringFilter<"Credential"> | string
    type?: StringFilter<"Credential"> | string
    data?: JsonFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CredentialWhereInput | CredentialWhereInput[]
    OR?: CredentialWhereInput[]
    NOT?: CredentialWhereInput | CredentialWhereInput[]
    userId?: StringFilter<"Credential"> | string
    name?: StringFilter<"Credential"> | string
    type?: StringFilter<"Credential"> | string
    data?: JsonFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CredentialCountOrderByAggregateInput
    _max?: CredentialMaxOrderByAggregateInput
    _min?: CredentialMinOrderByAggregateInput
  }

  export type CredentialScalarWhereWithAggregatesInput = {
    AND?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    OR?: CredentialScalarWhereWithAggregatesInput[]
    NOT?: CredentialScalarWhereWithAggregatesInput | CredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Credential"> | string
    userId?: StringWithAggregatesFilter<"Credential"> | string
    name?: StringWithAggregatesFilter<"Credential"> | string
    type?: StringWithAggregatesFilter<"Credential"> | string
    data?: JsonWithAggregatesFilter<"Credential">
    createdAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credential"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    trigger?: StringFilter<"Workflow"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: WorkflowNodeListRelationFilter
    nodeLinks?: WorkflowNodeLinkListRelationFilter
    executionHistories?: ExecutionHistoryListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trigger?: SortOrder
    user?: UserOrderByWithRelationInput
    nodes?: WorkflowNodeOrderByRelationAggregateInput
    nodeLinks?: WorkflowNodeLinkOrderByRelationAggregateInput
    executionHistories?: ExecutionHistoryOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    trigger?: StringFilter<"Workflow"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: WorkflowNodeListRelationFilter
    nodeLinks?: WorkflowNodeLinkListRelationFilter
    executionHistories?: ExecutionHistoryListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trigger?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    isActive?: BoolWithAggregatesFilter<"Workflow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    trigger?: StringWithAggregatesFilter<"Workflow"> | string
  }

  export type WorkflowNodeWhereInput = {
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    id?: StringFilter<"WorkflowNode"> | string
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: StringFilter<"WorkflowNode"> | string
    parameters?: JsonFilter<"WorkflowNode">
    positionX?: IntNullableFilter<"WorkflowNode"> | number | null
    positionY?: IntNullableFilter<"WorkflowNode"> | number | null
    createdAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    credentialId?: StringNullableFilter<"WorkflowNode"> | string | null
    trigger?: StringFilter<"WorkflowNode"> | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    outgoingLinks?: WorkflowNodeLinkListRelationFilter
    incomingLinks?: WorkflowNodeLinkListRelationFilter
  }

  export type WorkflowNodeOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentialId?: SortOrderInput | SortOrder
    trigger?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    outgoingLinks?: WorkflowNodeLinkOrderByRelationAggregateInput
    incomingLinks?: WorkflowNodeLinkOrderByRelationAggregateInput
  }

  export type WorkflowNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: StringFilter<"WorkflowNode"> | string
    parameters?: JsonFilter<"WorkflowNode">
    positionX?: IntNullableFilter<"WorkflowNode"> | number | null
    positionY?: IntNullableFilter<"WorkflowNode"> | number | null
    createdAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    credentialId?: StringNullableFilter<"WorkflowNode"> | string | null
    trigger?: StringFilter<"WorkflowNode"> | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    outgoingLinks?: WorkflowNodeLinkListRelationFilter
    incomingLinks?: WorkflowNodeLinkListRelationFilter
  }, "id">

  export type WorkflowNodeOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    positionX?: SortOrderInput | SortOrder
    positionY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentialId?: SortOrderInput | SortOrder
    trigger?: SortOrder
    _count?: WorkflowNodeCountOrderByAggregateInput
    _avg?: WorkflowNodeAvgOrderByAggregateInput
    _max?: WorkflowNodeMaxOrderByAggregateInput
    _min?: WorkflowNodeMinOrderByAggregateInput
    _sum?: WorkflowNodeSumOrderByAggregateInput
  }

  export type WorkflowNodeScalarWhereWithAggregatesInput = {
    AND?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    OR?: WorkflowNodeScalarWhereWithAggregatesInput[]
    NOT?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowNode"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowNode"> | string
    type?: StringWithAggregatesFilter<"WorkflowNode"> | string
    parameters?: JsonWithAggregatesFilter<"WorkflowNode">
    positionX?: IntNullableWithAggregatesFilter<"WorkflowNode"> | number | null
    positionY?: IntNullableWithAggregatesFilter<"WorkflowNode"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowNode"> | Date | string
    credentialId?: StringNullableWithAggregatesFilter<"WorkflowNode"> | string | null
    trigger?: StringWithAggregatesFilter<"WorkflowNode"> | string
  }

  export type WorkflowNodeLinkWhereInput = {
    AND?: WorkflowNodeLinkWhereInput | WorkflowNodeLinkWhereInput[]
    OR?: WorkflowNodeLinkWhereInput[]
    NOT?: WorkflowNodeLinkWhereInput | WorkflowNodeLinkWhereInput[]
    id?: StringFilter<"WorkflowNodeLink"> | string
    workflowId?: StringFilter<"WorkflowNodeLink"> | string
    fromNodeId?: StringFilter<"WorkflowNodeLink"> | string
    toNodeId?: StringFilter<"WorkflowNodeLink"> | string
    createdAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    fromNode?: XOR<WorkflowNodeScalarRelationFilter, WorkflowNodeWhereInput>
    toNode?: XOR<WorkflowNodeScalarRelationFilter, WorkflowNodeWhereInput>
  }

  export type WorkflowNodeLinkOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    fromNode?: WorkflowNodeOrderByWithRelationInput
    toNode?: WorkflowNodeOrderByWithRelationInput
  }

  export type WorkflowNodeLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowNodeLinkWhereInput | WorkflowNodeLinkWhereInput[]
    OR?: WorkflowNodeLinkWhereInput[]
    NOT?: WorkflowNodeLinkWhereInput | WorkflowNodeLinkWhereInput[]
    workflowId?: StringFilter<"WorkflowNodeLink"> | string
    fromNodeId?: StringFilter<"WorkflowNodeLink"> | string
    toNodeId?: StringFilter<"WorkflowNodeLink"> | string
    createdAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    fromNode?: XOR<WorkflowNodeScalarRelationFilter, WorkflowNodeWhereInput>
    toNode?: XOR<WorkflowNodeScalarRelationFilter, WorkflowNodeWhereInput>
  }, "id">

  export type WorkflowNodeLinkOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowNodeLinkCountOrderByAggregateInput
    _max?: WorkflowNodeLinkMaxOrderByAggregateInput
    _min?: WorkflowNodeLinkMinOrderByAggregateInput
  }

  export type WorkflowNodeLinkScalarWhereWithAggregatesInput = {
    AND?: WorkflowNodeLinkScalarWhereWithAggregatesInput | WorkflowNodeLinkScalarWhereWithAggregatesInput[]
    OR?: WorkflowNodeLinkScalarWhereWithAggregatesInput[]
    NOT?: WorkflowNodeLinkScalarWhereWithAggregatesInput | WorkflowNodeLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowNodeLink"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowNodeLink"> | string
    fromNodeId?: StringWithAggregatesFilter<"WorkflowNodeLink"> | string
    toNodeId?: StringWithAggregatesFilter<"WorkflowNodeLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowNodeLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowNodeLink"> | Date | string
  }

  export type ExecutionHistoryWhereInput = {
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    workflowId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    startedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    log?: JsonFilter<"ExecutionHistory">
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    nodeExecutionHistories?: NodeExecutionHistoryListRelationFilter
  }

  export type ExecutionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    log?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    nodeExecutionHistories?: NodeExecutionHistoryOrderByRelationAggregateInput
  }

  export type ExecutionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    workflowId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    startedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    log?: JsonFilter<"ExecutionHistory">
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    nodeExecutionHistories?: NodeExecutionHistoryListRelationFilter
  }, "id">

  export type ExecutionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    log?: SortOrder
    _count?: ExecutionHistoryCountOrderByAggregateInput
    _max?: ExecutionHistoryMaxOrderByAggregateInput
    _min?: ExecutionHistoryMinOrderByAggregateInput
  }

  export type ExecutionHistoryScalarWhereWithAggregatesInput = {
    AND?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    OR?: ExecutionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    workflowId?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    status?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    startedAt?: DateTimeWithAggregatesFilter<"ExecutionHistory"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"ExecutionHistory"> | Date | string | null
    log?: JsonWithAggregatesFilter<"ExecutionHistory">
  }

  export type NodeExecutionHistoryWhereInput = {
    AND?: NodeExecutionHistoryWhereInput | NodeExecutionHistoryWhereInput[]
    OR?: NodeExecutionHistoryWhereInput[]
    NOT?: NodeExecutionHistoryWhereInput | NodeExecutionHistoryWhereInput[]
    id?: StringFilter<"NodeExecutionHistory"> | string
    workflowExecutionId?: StringFilter<"NodeExecutionHistory"> | string
    nodeId?: StringFilter<"NodeExecutionHistory"> | string
    input?: JsonFilter<"NodeExecutionHistory">
    output?: JsonFilter<"NodeExecutionHistory">
    status?: StringFilter<"NodeExecutionHistory"> | string
    timestamp?: DateTimeFilter<"NodeExecutionHistory"> | Date | string
    executionHistory?: XOR<ExecutionHistoryScalarRelationFilter, ExecutionHistoryWhereInput>
  }

  export type NodeExecutionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    nodeId?: SortOrder
    input?: SortOrder
    output?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    executionHistory?: ExecutionHistoryOrderByWithRelationInput
  }

  export type NodeExecutionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeExecutionHistoryWhereInput | NodeExecutionHistoryWhereInput[]
    OR?: NodeExecutionHistoryWhereInput[]
    NOT?: NodeExecutionHistoryWhereInput | NodeExecutionHistoryWhereInput[]
    workflowExecutionId?: StringFilter<"NodeExecutionHistory"> | string
    nodeId?: StringFilter<"NodeExecutionHistory"> | string
    input?: JsonFilter<"NodeExecutionHistory">
    output?: JsonFilter<"NodeExecutionHistory">
    status?: StringFilter<"NodeExecutionHistory"> | string
    timestamp?: DateTimeFilter<"NodeExecutionHistory"> | Date | string
    executionHistory?: XOR<ExecutionHistoryScalarRelationFilter, ExecutionHistoryWhereInput>
  }, "id">

  export type NodeExecutionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    nodeId?: SortOrder
    input?: SortOrder
    output?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    _count?: NodeExecutionHistoryCountOrderByAggregateInput
    _max?: NodeExecutionHistoryMaxOrderByAggregateInput
    _min?: NodeExecutionHistoryMinOrderByAggregateInput
  }

  export type NodeExecutionHistoryScalarWhereWithAggregatesInput = {
    AND?: NodeExecutionHistoryScalarWhereWithAggregatesInput | NodeExecutionHistoryScalarWhereWithAggregatesInput[]
    OR?: NodeExecutionHistoryScalarWhereWithAggregatesInput[]
    NOT?: NodeExecutionHistoryScalarWhereWithAggregatesInput | NodeExecutionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NodeExecutionHistory"> | string
    workflowExecutionId?: StringWithAggregatesFilter<"NodeExecutionHistory"> | string
    nodeId?: StringWithAggregatesFilter<"NodeExecutionHistory"> | string
    input?: JsonWithAggregatesFilter<"NodeExecutionHistory">
    output?: JsonWithAggregatesFilter<"NodeExecutionHistory">
    status?: StringWithAggregatesFilter<"NodeExecutionHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"NodeExecutionHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutUserInput
    credentials?: CredentialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
    credentials?: CredentialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCredentialsInput
  }

  export type CredentialUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type CredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodes?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodes?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowNodeCreateInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
    outgoingLinks?: WorkflowNodeLinkCreateNestedManyWithoutFromNodeInput
    incomingLinks?: WorkflowNodeLinkCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeUncheckedCreateInput = {
    id?: string
    workflowId: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    outgoingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutFromNodeInput
    incomingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
    outgoingLinks?: WorkflowNodeLinkUpdateManyWithoutFromNodeNestedInput
    incomingLinks?: WorkflowNodeLinkUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    outgoingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeNestedInput
    incomingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeCreateManyInput = {
    id?: string
    workflowId: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
  }

  export type WorkflowNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowNodeLinkCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodeLinksInput
    fromNode: WorkflowNodeCreateNestedOneWithoutOutgoingLinksInput
    toNode: WorkflowNodeCreateNestedOneWithoutIncomingLinksInput
  }

  export type WorkflowNodeLinkUncheckedCreateInput = {
    id?: string
    workflowId: string
    fromNodeId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodeLinksNestedInput
    fromNode?: WorkflowNodeUpdateOneRequiredWithoutOutgoingLinksNestedInput
    toNode?: WorkflowNodeUpdateOneRequiredWithoutIncomingLinksNestedInput
  }

  export type WorkflowNodeLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkCreateManyInput = {
    id?: string
    workflowId: string
    fromNodeId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryCreateInput = {
    id?: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
    workflow: WorkflowCreateNestedOneWithoutExecutionHistoriesInput
    nodeExecutionHistories?: NodeExecutionHistoryCreateNestedManyWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateInput = {
    id?: string
    workflowId: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryUncheckedCreateNestedManyWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionHistoriesNestedInput
    nodeExecutionHistories?: NodeExecutionHistoryUpdateManyWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryUncheckedUpdateManyWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryCreateManyInput = {
    id?: string
    workflowId: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
  }

  export type NodeExecutionHistoryCreateInput = {
    id?: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
    executionHistory: ExecutionHistoryCreateNestedOneWithoutNodeExecutionHistoriesInput
  }

  export type NodeExecutionHistoryUncheckedCreateInput = {
    id?: string
    workflowExecutionId: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
  }

  export type NodeExecutionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionHistory?: ExecutionHistoryUpdateOneRequiredWithoutNodeExecutionHistoriesNestedInput
  }

  export type NodeExecutionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeExecutionHistoryCreateManyInput = {
    id?: string
    workflowExecutionId: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
  }

  export type NodeExecutionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeExecutionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type CredentialListRelationFilter = {
    every?: CredentialWhereInput
    some?: CredentialWhereInput
    none?: CredentialWhereInput
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkflowNodeListRelationFilter = {
    every?: WorkflowNodeWhereInput
    some?: WorkflowNodeWhereInput
    none?: WorkflowNodeWhereInput
  }

  export type WorkflowNodeLinkListRelationFilter = {
    every?: WorkflowNodeLinkWhereInput
    some?: WorkflowNodeLinkWhereInput
    none?: WorkflowNodeLinkWhereInput
  }

  export type ExecutionHistoryListRelationFilter = {
    every?: ExecutionHistoryWhereInput
    some?: ExecutionHistoryWhereInput
    none?: ExecutionHistoryWhereInput
  }

  export type WorkflowNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowNodeLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trigger?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trigger?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trigger?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowNodeCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentialId?: SortOrder
    trigger?: SortOrder
  }

  export type WorkflowNodeAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type WorkflowNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentialId?: SortOrder
    trigger?: SortOrder
  }

  export type WorkflowNodeMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credentialId?: SortOrder
    trigger?: SortOrder
  }

  export type WorkflowNodeSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type WorkflowNodeScalarRelationFilter = {
    is?: WorkflowNodeWhereInput
    isNot?: WorkflowNodeWhereInput
  }

  export type WorkflowNodeLinkCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeLinkMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    fromNodeId?: SortOrder
    toNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NodeExecutionHistoryListRelationFilter = {
    every?: NodeExecutionHistoryWhereInput
    some?: NodeExecutionHistoryWhereInput
    none?: NodeExecutionHistoryWhereInput
  }

  export type NodeExecutionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    log?: SortOrder
  }

  export type ExecutionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type ExecutionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExecutionHistoryScalarRelationFilter = {
    is?: ExecutionHistoryWhereInput
    isNot?: ExecutionHistoryWhereInput
  }

  export type NodeExecutionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    nodeId?: SortOrder
    input?: SortOrder
    output?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type NodeExecutionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    nodeId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type NodeExecutionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflowExecutionId?: SortOrder
    nodeId?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CredentialCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type CredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CredentialUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutUserInput | CredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutUserInput | CredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutUserInput | CredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type CredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput> | CredentialCreateWithoutUserInput[] | CredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialCreateOrConnectWithoutUserInput | CredentialCreateOrConnectWithoutUserInput[]
    upsert?: CredentialUpsertWithWhereUniqueWithoutUserInput | CredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialCreateManyUserInputEnvelope
    set?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    disconnect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    delete?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    connect?: CredentialWhereUniqueInput | CredentialWhereUniqueInput[]
    update?: CredentialUpdateWithWhereUniqueWithoutUserInput | CredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialUpdateManyWithWhereWithoutUserInput | CredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    upsert?: UserUpsertWithoutCredentialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCredentialsInput, UserUpdateWithoutCredentialsInput>, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowNodeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
  }

  export type WorkflowNodeLinkCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput> | WorkflowNodeLinkCreateWithoutWorkflowInput[] | WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput | WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeLinkCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type ExecutionHistoryCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
  }

  export type WorkflowNodeLinkUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput> | WorkflowNodeLinkCreateWithoutWorkflowInput[] | WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput | WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeLinkCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type WorkflowNodeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    disconnect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    delete?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    update?: WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
  }

  export type WorkflowNodeLinkUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput> | WorkflowNodeLinkCreateWithoutWorkflowInput[] | WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput | WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeLinkCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeLinkUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type ExecutionHistoryUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput | ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    disconnect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    delete?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    update?: WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput> | WorkflowNodeLinkCreateWithoutWorkflowInput[] | WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput | WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeLinkCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeLinkUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput | ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutNodesInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowNodeLinkCreateNestedManyWithoutFromNodeInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput> | WorkflowNodeLinkCreateWithoutFromNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput | WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyFromNodeInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type WorkflowNodeLinkCreateNestedManyWithoutToNodeInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput> | WorkflowNodeLinkCreateWithoutToNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutToNodeInput | WorkflowNodeLinkCreateOrConnectWithoutToNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyToNodeInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type WorkflowNodeLinkUncheckedCreateNestedManyWithoutFromNodeInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput> | WorkflowNodeLinkCreateWithoutFromNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput | WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyFromNodeInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type WorkflowNodeLinkUncheckedCreateNestedManyWithoutToNodeInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput> | WorkflowNodeLinkCreateWithoutToNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutToNodeInput | WorkflowNodeLinkCreateOrConnectWithoutToNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyToNodeInputEnvelope
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkflowUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    upsert?: WorkflowUpsertWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutNodesInput, WorkflowUpdateWithoutNodesInput>, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type WorkflowNodeLinkUpdateManyWithoutFromNodeNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput> | WorkflowNodeLinkCreateWithoutFromNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput | WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutFromNodeInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutFromNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyFromNodeInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutFromNodeInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutFromNodeInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutFromNodeInput | WorkflowNodeLinkUpdateManyWithWhereWithoutFromNodeInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type WorkflowNodeLinkUpdateManyWithoutToNodeNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput> | WorkflowNodeLinkCreateWithoutToNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutToNodeInput | WorkflowNodeLinkCreateOrConnectWithoutToNodeInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutToNodeInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutToNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyToNodeInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutToNodeInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutToNodeInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutToNodeInput | WorkflowNodeLinkUpdateManyWithWhereWithoutToNodeInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput> | WorkflowNodeLinkCreateWithoutFromNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput | WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutFromNodeInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutFromNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyFromNodeInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutFromNodeInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutFromNodeInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutFromNodeInput | WorkflowNodeLinkUpdateManyWithWhereWithoutFromNodeInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeNestedInput = {
    create?: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput> | WorkflowNodeLinkCreateWithoutToNodeInput[] | WorkflowNodeLinkUncheckedCreateWithoutToNodeInput[]
    connectOrCreate?: WorkflowNodeLinkCreateOrConnectWithoutToNodeInput | WorkflowNodeLinkCreateOrConnectWithoutToNodeInput[]
    upsert?: WorkflowNodeLinkUpsertWithWhereUniqueWithoutToNodeInput | WorkflowNodeLinkUpsertWithWhereUniqueWithoutToNodeInput[]
    createMany?: WorkflowNodeLinkCreateManyToNodeInputEnvelope
    set?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    disconnect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    delete?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    connect?: WorkflowNodeLinkWhereUniqueInput | WorkflowNodeLinkWhereUniqueInput[]
    update?: WorkflowNodeLinkUpdateWithWhereUniqueWithoutToNodeInput | WorkflowNodeLinkUpdateWithWhereUniqueWithoutToNodeInput[]
    updateMany?: WorkflowNodeLinkUpdateManyWithWhereWithoutToNodeInput | WorkflowNodeLinkUpdateManyWithWhereWithoutToNodeInput[]
    deleteMany?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutNodeLinksInput = {
    create?: XOR<WorkflowCreateWithoutNodeLinksInput, WorkflowUncheckedCreateWithoutNodeLinksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodeLinksInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowNodeCreateNestedOneWithoutOutgoingLinksInput = {
    create?: XOR<WorkflowNodeCreateWithoutOutgoingLinksInput, WorkflowNodeUncheckedCreateWithoutOutgoingLinksInput>
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutOutgoingLinksInput
    connect?: WorkflowNodeWhereUniqueInput
  }

  export type WorkflowNodeCreateNestedOneWithoutIncomingLinksInput = {
    create?: XOR<WorkflowNodeCreateWithoutIncomingLinksInput, WorkflowNodeUncheckedCreateWithoutIncomingLinksInput>
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutIncomingLinksInput
    connect?: WorkflowNodeWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutNodeLinksNestedInput = {
    create?: XOR<WorkflowCreateWithoutNodeLinksInput, WorkflowUncheckedCreateWithoutNodeLinksInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodeLinksInput
    upsert?: WorkflowUpsertWithoutNodeLinksInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutNodeLinksInput, WorkflowUpdateWithoutNodeLinksInput>, WorkflowUncheckedUpdateWithoutNodeLinksInput>
  }

  export type WorkflowNodeUpdateOneRequiredWithoutOutgoingLinksNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutOutgoingLinksInput, WorkflowNodeUncheckedCreateWithoutOutgoingLinksInput>
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutOutgoingLinksInput
    upsert?: WorkflowNodeUpsertWithoutOutgoingLinksInput
    connect?: WorkflowNodeWhereUniqueInput
    update?: XOR<XOR<WorkflowNodeUpdateToOneWithWhereWithoutOutgoingLinksInput, WorkflowNodeUpdateWithoutOutgoingLinksInput>, WorkflowNodeUncheckedUpdateWithoutOutgoingLinksInput>
  }

  export type WorkflowNodeUpdateOneRequiredWithoutIncomingLinksNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutIncomingLinksInput, WorkflowNodeUncheckedCreateWithoutIncomingLinksInput>
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutIncomingLinksInput
    upsert?: WorkflowNodeUpsertWithoutIncomingLinksInput
    connect?: WorkflowNodeWhereUniqueInput
    update?: XOR<XOR<WorkflowNodeUpdateToOneWithWhereWithoutIncomingLinksInput, WorkflowNodeUpdateWithoutIncomingLinksInput>, WorkflowNodeUncheckedUpdateWithoutIncomingLinksInput>
  }

  export type WorkflowCreateNestedOneWithoutExecutionHistoriesInput = {
    create?: XOR<WorkflowCreateWithoutExecutionHistoriesInput, WorkflowUncheckedCreateWithoutExecutionHistoriesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionHistoriesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type NodeExecutionHistoryCreateNestedManyWithoutExecutionHistoryInput = {
    create?: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput> | NodeExecutionHistoryCreateWithoutExecutionHistoryInput[] | NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput[]
    connectOrCreate?: NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput | NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput[]
    createMany?: NodeExecutionHistoryCreateManyExecutionHistoryInputEnvelope
    connect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
  }

  export type NodeExecutionHistoryUncheckedCreateNestedManyWithoutExecutionHistoryInput = {
    create?: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput> | NodeExecutionHistoryCreateWithoutExecutionHistoryInput[] | NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput[]
    connectOrCreate?: NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput | NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput[]
    createMany?: NodeExecutionHistoryCreateManyExecutionHistoryInputEnvelope
    connect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkflowUpdateOneRequiredWithoutExecutionHistoriesNestedInput = {
    create?: XOR<WorkflowCreateWithoutExecutionHistoriesInput, WorkflowUncheckedCreateWithoutExecutionHistoriesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionHistoriesInput
    upsert?: WorkflowUpsertWithoutExecutionHistoriesInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutExecutionHistoriesInput, WorkflowUpdateWithoutExecutionHistoriesInput>, WorkflowUncheckedUpdateWithoutExecutionHistoriesInput>
  }

  export type NodeExecutionHistoryUpdateManyWithoutExecutionHistoryNestedInput = {
    create?: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput> | NodeExecutionHistoryCreateWithoutExecutionHistoryInput[] | NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput[]
    connectOrCreate?: NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput | NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput[]
    upsert?: NodeExecutionHistoryUpsertWithWhereUniqueWithoutExecutionHistoryInput | NodeExecutionHistoryUpsertWithWhereUniqueWithoutExecutionHistoryInput[]
    createMany?: NodeExecutionHistoryCreateManyExecutionHistoryInputEnvelope
    set?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    disconnect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    delete?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    connect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    update?: NodeExecutionHistoryUpdateWithWhereUniqueWithoutExecutionHistoryInput | NodeExecutionHistoryUpdateWithWhereUniqueWithoutExecutionHistoryInput[]
    updateMany?: NodeExecutionHistoryUpdateManyWithWhereWithoutExecutionHistoryInput | NodeExecutionHistoryUpdateManyWithWhereWithoutExecutionHistoryInput[]
    deleteMany?: NodeExecutionHistoryScalarWhereInput | NodeExecutionHistoryScalarWhereInput[]
  }

  export type NodeExecutionHistoryUncheckedUpdateManyWithoutExecutionHistoryNestedInput = {
    create?: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput> | NodeExecutionHistoryCreateWithoutExecutionHistoryInput[] | NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput[]
    connectOrCreate?: NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput | NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput[]
    upsert?: NodeExecutionHistoryUpsertWithWhereUniqueWithoutExecutionHistoryInput | NodeExecutionHistoryUpsertWithWhereUniqueWithoutExecutionHistoryInput[]
    createMany?: NodeExecutionHistoryCreateManyExecutionHistoryInputEnvelope
    set?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    disconnect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    delete?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    connect?: NodeExecutionHistoryWhereUniqueInput | NodeExecutionHistoryWhereUniqueInput[]
    update?: NodeExecutionHistoryUpdateWithWhereUniqueWithoutExecutionHistoryInput | NodeExecutionHistoryUpdateWithWhereUniqueWithoutExecutionHistoryInput[]
    updateMany?: NodeExecutionHistoryUpdateManyWithWhereWithoutExecutionHistoryInput | NodeExecutionHistoryUpdateManyWithWhereWithoutExecutionHistoryInput[]
    deleteMany?: NodeExecutionHistoryScalarWhereInput | NodeExecutionHistoryScalarWhereInput[]
  }

  export type ExecutionHistoryCreateNestedOneWithoutNodeExecutionHistoriesInput = {
    create?: XOR<ExecutionHistoryCreateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedCreateWithoutNodeExecutionHistoriesInput>
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutNodeExecutionHistoriesInput
    connect?: ExecutionHistoryWhereUniqueInput
  }

  export type ExecutionHistoryUpdateOneRequiredWithoutNodeExecutionHistoriesNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedCreateWithoutNodeExecutionHistoriesInput>
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutNodeExecutionHistoriesInput
    upsert?: ExecutionHistoryUpsertWithoutNodeExecutionHistoriesInput
    connect?: ExecutionHistoryWhereUniqueInput
    update?: XOR<XOR<ExecutionHistoryUpdateToOneWithWhereWithoutNodeExecutionHistoriesInput, ExecutionHistoryUpdateWithoutNodeExecutionHistoriesInput>, ExecutionHistoryUncheckedUpdateWithoutNodeExecutionHistoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodes?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodes?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CredentialCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredentialCreateOrConnectWithoutUserInput = {
    where: CredentialWhereUniqueInput
    create: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput>
  }

  export type CredentialCreateManyUserInputEnvelope = {
    data: CredentialCreateManyUserInput | CredentialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    trigger?: StringFilter<"Workflow"> | string
  }

  export type CredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: CredentialWhereUniqueInput
    update: XOR<CredentialUpdateWithoutUserInput, CredentialUncheckedUpdateWithoutUserInput>
    create: XOR<CredentialCreateWithoutUserInput, CredentialUncheckedCreateWithoutUserInput>
  }

  export type CredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: CredentialWhereUniqueInput
    data: XOR<CredentialUpdateWithoutUserInput, CredentialUncheckedUpdateWithoutUserInput>
  }

  export type CredentialUpdateManyWithWhereWithoutUserInput = {
    where: CredentialScalarWhereInput
    data: XOR<CredentialUpdateManyMutationInput, CredentialUncheckedUpdateManyWithoutUserInput>
  }

  export type CredentialScalarWhereInput = {
    AND?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    OR?: CredentialScalarWhereInput[]
    NOT?: CredentialScalarWhereInput | CredentialScalarWhereInput[]
    id?: StringFilter<"Credential"> | string
    userId?: StringFilter<"Credential"> | string
    name?: StringFilter<"Credential"> | string
    type?: StringFilter<"Credential"> | string
    data?: JsonFilter<"Credential">
    createdAt?: DateTimeFilter<"Credential"> | Date | string
    updatedAt?: DateTimeFilter<"Credential"> | Date | string
  }

  export type UserCreateWithoutCredentialsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
  }

  export type UserUpsertWithoutCredentialsInput = {
    update: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: CredentialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credentials?: CredentialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type WorkflowNodeCreateWithoutWorkflowInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    outgoingLinks?: WorkflowNodeLinkCreateNestedManyWithoutFromNodeInput
    incomingLinks?: WorkflowNodeLinkCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    outgoingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutFromNodeInput
    incomingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    create: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeCreateManyWorkflowInputEnvelope = {
    data: WorkflowNodeCreateManyWorkflowInput | WorkflowNodeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowNodeLinkCreateWithoutWorkflowInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromNode: WorkflowNodeCreateNestedOneWithoutOutgoingLinksInput
    toNode: WorkflowNodeCreateNestedOneWithoutIncomingLinksInput
  }

  export type WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput = {
    id?: string
    fromNodeId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    create: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeLinkCreateManyWorkflowInputEnvelope = {
    data: WorkflowNodeLinkCreateManyWorkflowInput | WorkflowNodeLinkCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionHistoryCreateWithoutWorkflowInput = {
    id?: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryCreateNestedManyWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutWorkflowInput = {
    id?: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryUncheckedCreateNestedManyWithoutExecutionHistoryInput
  }

  export type ExecutionHistoryCreateOrConnectWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionHistoryCreateManyWorkflowInputEnvelope = {
    data: ExecutionHistoryCreateManyWorkflowInput | ExecutionHistoryCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: CredentialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentials?: CredentialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    update: XOR<WorkflowNodeUpdateWithoutWorkflowInput, WorkflowNodeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    data: XOR<WorkflowNodeUpdateWithoutWorkflowInput, WorkflowNodeUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowNodeScalarWhereInput
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowNodeScalarWhereInput = {
    AND?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
    OR?: WorkflowNodeScalarWhereInput[]
    NOT?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
    id?: StringFilter<"WorkflowNode"> | string
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: StringFilter<"WorkflowNode"> | string
    parameters?: JsonFilter<"WorkflowNode">
    positionX?: IntNullableFilter<"WorkflowNode"> | number | null
    positionY?: IntNullableFilter<"WorkflowNode"> | number | null
    createdAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    credentialId?: StringNullableFilter<"WorkflowNode"> | string | null
    trigger?: StringFilter<"WorkflowNode"> | string
  }

  export type WorkflowNodeLinkUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    update: XOR<WorkflowNodeLinkUpdateWithoutWorkflowInput, WorkflowNodeLinkUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowNodeLinkCreateWithoutWorkflowInput, WorkflowNodeLinkUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeLinkUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    data: XOR<WorkflowNodeLinkUpdateWithoutWorkflowInput, WorkflowNodeLinkUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowNodeLinkUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowNodeLinkScalarWhereInput
    data: XOR<WorkflowNodeLinkUpdateManyMutationInput, WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowNodeLinkScalarWhereInput = {
    AND?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
    OR?: WorkflowNodeLinkScalarWhereInput[]
    NOT?: WorkflowNodeLinkScalarWhereInput | WorkflowNodeLinkScalarWhereInput[]
    id?: StringFilter<"WorkflowNodeLink"> | string
    workflowId?: StringFilter<"WorkflowNodeLink"> | string
    fromNodeId?: StringFilter<"WorkflowNodeLink"> | string
    toNodeId?: StringFilter<"WorkflowNodeLink"> | string
    createdAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNodeLink"> | Date | string
  }

  export type ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    update: XOR<ExecutionHistoryUpdateWithoutWorkflowInput, ExecutionHistoryUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    data: XOR<ExecutionHistoryUpdateWithoutWorkflowInput, ExecutionHistoryUncheckedUpdateWithoutWorkflowInput>
  }

  export type ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput = {
    where: ExecutionHistoryScalarWhereInput
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ExecutionHistoryScalarWhereInput = {
    AND?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    OR?: ExecutionHistoryScalarWhereInput[]
    NOT?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    workflowId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    startedAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    finishedAt?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    log?: JsonFilter<"ExecutionHistory">
  }

  export type WorkflowCreateWithoutNodesInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodeLinks?: WorkflowNodeLinkCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutNodesInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodeLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutNodesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
  }

  export type WorkflowNodeLinkCreateWithoutFromNodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodeLinksInput
    toNode: WorkflowNodeCreateNestedOneWithoutIncomingLinksInput
  }

  export type WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput = {
    id?: string
    workflowId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkCreateOrConnectWithoutFromNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    create: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput>
  }

  export type WorkflowNodeLinkCreateManyFromNodeInputEnvelope = {
    data: WorkflowNodeLinkCreateManyFromNodeInput | WorkflowNodeLinkCreateManyFromNodeInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowNodeLinkCreateWithoutToNodeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodeLinksInput
    fromNode: WorkflowNodeCreateNestedOneWithoutOutgoingLinksInput
  }

  export type WorkflowNodeLinkUncheckedCreateWithoutToNodeInput = {
    id?: string
    workflowId: string
    fromNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkCreateOrConnectWithoutToNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    create: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput>
  }

  export type WorkflowNodeLinkCreateManyToNodeInputEnvelope = {
    data: WorkflowNodeLinkCreateManyToNodeInput | WorkflowNodeLinkCreateManyToNodeInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutNodesInput = {
    update: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutNodesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type WorkflowUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodeLinks?: WorkflowNodeLinkUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodeLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowNodeLinkUpsertWithWhereUniqueWithoutFromNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    update: XOR<WorkflowNodeLinkUpdateWithoutFromNodeInput, WorkflowNodeLinkUncheckedUpdateWithoutFromNodeInput>
    create: XOR<WorkflowNodeLinkCreateWithoutFromNodeInput, WorkflowNodeLinkUncheckedCreateWithoutFromNodeInput>
  }

  export type WorkflowNodeLinkUpdateWithWhereUniqueWithoutFromNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    data: XOR<WorkflowNodeLinkUpdateWithoutFromNodeInput, WorkflowNodeLinkUncheckedUpdateWithoutFromNodeInput>
  }

  export type WorkflowNodeLinkUpdateManyWithWhereWithoutFromNodeInput = {
    where: WorkflowNodeLinkScalarWhereInput
    data: XOR<WorkflowNodeLinkUpdateManyMutationInput, WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeInput>
  }

  export type WorkflowNodeLinkUpsertWithWhereUniqueWithoutToNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    update: XOR<WorkflowNodeLinkUpdateWithoutToNodeInput, WorkflowNodeLinkUncheckedUpdateWithoutToNodeInput>
    create: XOR<WorkflowNodeLinkCreateWithoutToNodeInput, WorkflowNodeLinkUncheckedCreateWithoutToNodeInput>
  }

  export type WorkflowNodeLinkUpdateWithWhereUniqueWithoutToNodeInput = {
    where: WorkflowNodeLinkWhereUniqueInput
    data: XOR<WorkflowNodeLinkUpdateWithoutToNodeInput, WorkflowNodeLinkUncheckedUpdateWithoutToNodeInput>
  }

  export type WorkflowNodeLinkUpdateManyWithWhereWithoutToNodeInput = {
    where: WorkflowNodeLinkScalarWhereInput
    data: XOR<WorkflowNodeLinkUpdateManyMutationInput, WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeInput>
  }

  export type WorkflowCreateWithoutNodeLinksInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutNodeLinksInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodes?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    executionHistories?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutNodeLinksInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutNodeLinksInput, WorkflowUncheckedCreateWithoutNodeLinksInput>
  }

  export type WorkflowNodeCreateWithoutOutgoingLinksInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
    incomingLinks?: WorkflowNodeLinkCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeUncheckedCreateWithoutOutgoingLinksInput = {
    id?: string
    workflowId: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    incomingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutToNodeInput
  }

  export type WorkflowNodeCreateOrConnectWithoutOutgoingLinksInput = {
    where: WorkflowNodeWhereUniqueInput
    create: XOR<WorkflowNodeCreateWithoutOutgoingLinksInput, WorkflowNodeUncheckedCreateWithoutOutgoingLinksInput>
  }

  export type WorkflowNodeCreateWithoutIncomingLinksInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
    outgoingLinks?: WorkflowNodeLinkCreateNestedManyWithoutFromNodeInput
  }

  export type WorkflowNodeUncheckedCreateWithoutIncomingLinksInput = {
    id?: string
    workflowId: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
    outgoingLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutFromNodeInput
  }

  export type WorkflowNodeCreateOrConnectWithoutIncomingLinksInput = {
    where: WorkflowNodeWhereUniqueInput
    create: XOR<WorkflowNodeCreateWithoutIncomingLinksInput, WorkflowNodeUncheckedCreateWithoutIncomingLinksInput>
  }

  export type WorkflowUpsertWithoutNodeLinksInput = {
    update: XOR<WorkflowUpdateWithoutNodeLinksInput, WorkflowUncheckedUpdateWithoutNodeLinksInput>
    create: XOR<WorkflowCreateWithoutNodeLinksInput, WorkflowUncheckedCreateWithoutNodeLinksInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutNodeLinksInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutNodeLinksInput, WorkflowUncheckedUpdateWithoutNodeLinksInput>
  }

  export type WorkflowUpdateWithoutNodeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutNodeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodes?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowNodeUpsertWithoutOutgoingLinksInput = {
    update: XOR<WorkflowNodeUpdateWithoutOutgoingLinksInput, WorkflowNodeUncheckedUpdateWithoutOutgoingLinksInput>
    create: XOR<WorkflowNodeCreateWithoutOutgoingLinksInput, WorkflowNodeUncheckedCreateWithoutOutgoingLinksInput>
    where?: WorkflowNodeWhereInput
  }

  export type WorkflowNodeUpdateToOneWithWhereWithoutOutgoingLinksInput = {
    where?: WorkflowNodeWhereInput
    data: XOR<WorkflowNodeUpdateWithoutOutgoingLinksInput, WorkflowNodeUncheckedUpdateWithoutOutgoingLinksInput>
  }

  export type WorkflowNodeUpdateWithoutOutgoingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
    incomingLinks?: WorkflowNodeLinkUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateWithoutOutgoingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    incomingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeUpsertWithoutIncomingLinksInput = {
    update: XOR<WorkflowNodeUpdateWithoutIncomingLinksInput, WorkflowNodeUncheckedUpdateWithoutIncomingLinksInput>
    create: XOR<WorkflowNodeCreateWithoutIncomingLinksInput, WorkflowNodeUncheckedCreateWithoutIncomingLinksInput>
    where?: WorkflowNodeWhereInput
  }

  export type WorkflowNodeUpdateToOneWithWhereWithoutIncomingLinksInput = {
    where?: WorkflowNodeWhereInput
    data: XOR<WorkflowNodeUpdateWithoutIncomingLinksInput, WorkflowNodeUncheckedUpdateWithoutIncomingLinksInput>
  }

  export type WorkflowNodeUpdateWithoutIncomingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
    outgoingLinks?: WorkflowNodeLinkUpdateManyWithoutFromNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateWithoutIncomingLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    outgoingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeNestedInput
  }

  export type WorkflowCreateWithoutExecutionHistoriesInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutExecutionHistoriesInput = {
    id?: string
    userId: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
    nodes?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    nodeLinks?: WorkflowNodeLinkUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutExecutionHistoriesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutExecutionHistoriesInput, WorkflowUncheckedCreateWithoutExecutionHistoriesInput>
  }

  export type NodeExecutionHistoryCreateWithoutExecutionHistoryInput = {
    id?: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
  }

  export type NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput = {
    id?: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
  }

  export type NodeExecutionHistoryCreateOrConnectWithoutExecutionHistoryInput = {
    where: NodeExecutionHistoryWhereUniqueInput
    create: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput>
  }

  export type NodeExecutionHistoryCreateManyExecutionHistoryInputEnvelope = {
    data: NodeExecutionHistoryCreateManyExecutionHistoryInput | NodeExecutionHistoryCreateManyExecutionHistoryInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutExecutionHistoriesInput = {
    update: XOR<WorkflowUpdateWithoutExecutionHistoriesInput, WorkflowUncheckedUpdateWithoutExecutionHistoriesInput>
    create: XOR<WorkflowCreateWithoutExecutionHistoriesInput, WorkflowUncheckedCreateWithoutExecutionHistoriesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutExecutionHistoriesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutExecutionHistoriesInput, WorkflowUncheckedUpdateWithoutExecutionHistoriesInput>
  }

  export type WorkflowUpdateWithoutExecutionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutExecutionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodes?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type NodeExecutionHistoryUpsertWithWhereUniqueWithoutExecutionHistoryInput = {
    where: NodeExecutionHistoryWhereUniqueInput
    update: XOR<NodeExecutionHistoryUpdateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedUpdateWithoutExecutionHistoryInput>
    create: XOR<NodeExecutionHistoryCreateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedCreateWithoutExecutionHistoryInput>
  }

  export type NodeExecutionHistoryUpdateWithWhereUniqueWithoutExecutionHistoryInput = {
    where: NodeExecutionHistoryWhereUniqueInput
    data: XOR<NodeExecutionHistoryUpdateWithoutExecutionHistoryInput, NodeExecutionHistoryUncheckedUpdateWithoutExecutionHistoryInput>
  }

  export type NodeExecutionHistoryUpdateManyWithWhereWithoutExecutionHistoryInput = {
    where: NodeExecutionHistoryScalarWhereInput
    data: XOR<NodeExecutionHistoryUpdateManyMutationInput, NodeExecutionHistoryUncheckedUpdateManyWithoutExecutionHistoryInput>
  }

  export type NodeExecutionHistoryScalarWhereInput = {
    AND?: NodeExecutionHistoryScalarWhereInput | NodeExecutionHistoryScalarWhereInput[]
    OR?: NodeExecutionHistoryScalarWhereInput[]
    NOT?: NodeExecutionHistoryScalarWhereInput | NodeExecutionHistoryScalarWhereInput[]
    id?: StringFilter<"NodeExecutionHistory"> | string
    workflowExecutionId?: StringFilter<"NodeExecutionHistory"> | string
    nodeId?: StringFilter<"NodeExecutionHistory"> | string
    input?: JsonFilter<"NodeExecutionHistory">
    output?: JsonFilter<"NodeExecutionHistory">
    status?: StringFilter<"NodeExecutionHistory"> | string
    timestamp?: DateTimeFilter<"NodeExecutionHistory"> | Date | string
  }

  export type ExecutionHistoryCreateWithoutNodeExecutionHistoriesInput = {
    id?: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
    workflow: WorkflowCreateNestedOneWithoutExecutionHistoriesInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutNodeExecutionHistoriesInput = {
    id?: string
    workflowId: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionHistoryCreateOrConnectWithoutNodeExecutionHistoriesInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedCreateWithoutNodeExecutionHistoriesInput>
  }

  export type ExecutionHistoryUpsertWithoutNodeExecutionHistoriesInput = {
    update: XOR<ExecutionHistoryUpdateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedUpdateWithoutNodeExecutionHistoriesInput>
    create: XOR<ExecutionHistoryCreateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedCreateWithoutNodeExecutionHistoriesInput>
    where?: ExecutionHistoryWhereInput
  }

  export type ExecutionHistoryUpdateToOneWithWhereWithoutNodeExecutionHistoriesInput = {
    where?: ExecutionHistoryWhereInput
    data: XOR<ExecutionHistoryUpdateWithoutNodeExecutionHistoriesInput, ExecutionHistoryUncheckedUpdateWithoutNodeExecutionHistoriesInput>
  }

  export type ExecutionHistoryUpdateWithoutNodeExecutionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionHistoriesNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutNodeExecutionHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trigger?: string
  }

  export type CredentialCreateManyUserInput = {
    id?: string
    name: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodes?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
    nodes?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    nodeLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowNestedInput
    executionHistories?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type CredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeCreateManyWorkflowInput = {
    id?: string
    type: string
    parameters: JsonNullValueInput | InputJsonValue
    positionX?: number | null
    positionY?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credentialId?: string | null
    trigger?: string
  }

  export type WorkflowNodeLinkCreateManyWorkflowInput = {
    id?: string
    fromNodeId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateManyWorkflowInput = {
    id?: string
    status: string
    startedAt?: Date | string
    finishedAt?: Date | string | null
    log: JsonNullValueInput | InputJsonValue
  }

  export type WorkflowNodeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    outgoingLinks?: WorkflowNodeLinkUpdateManyWithoutFromNodeNestedInput
    incomingLinks?: WorkflowNodeLinkUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
    outgoingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeNestedInput
    incomingLinks?: WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    positionX?: NullableIntFieldUpdateOperationsInput | number | null
    positionY?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowNodeLinkUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromNode?: WorkflowNodeUpdateOneRequiredWithoutOutgoingLinksNestedInput
    toNode?: WorkflowNodeUpdateOneRequiredWithoutIncomingLinksNestedInput
  }

  export type WorkflowNodeLinkUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryUpdateManyWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
    nodeExecutionHistories?: NodeExecutionHistoryUncheckedUpdateManyWithoutExecutionHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log?: JsonNullValueInput | InputJsonValue
  }

  export type WorkflowNodeLinkCreateManyFromNodeInput = {
    id?: string
    workflowId: string
    toNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkCreateManyToNodeInput = {
    id?: string
    workflowId: string
    fromNodeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeLinkUpdateWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodeLinksNestedInput
    toNode?: WorkflowNodeUpdateOneRequiredWithoutIncomingLinksNestedInput
  }

  export type WorkflowNodeLinkUncheckedUpdateWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutFromNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    toNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkUpdateWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodeLinksNestedInput
    fromNode?: WorkflowNodeUpdateOneRequiredWithoutOutgoingLinksNestedInput
  }

  export type WorkflowNodeLinkUncheckedUpdateWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeLinkUncheckedUpdateManyWithoutToNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    fromNodeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeExecutionHistoryCreateManyExecutionHistoryInput = {
    id?: string
    nodeId: string
    input: JsonNullValueInput | InputJsonValue
    output: JsonNullValueInput | InputJsonValue
    status: string
    timestamp?: Date | string
  }

  export type NodeExecutionHistoryUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeExecutionHistoryUncheckedUpdateWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeExecutionHistoryUncheckedUpdateManyWithoutExecutionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nodeId?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    output?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}