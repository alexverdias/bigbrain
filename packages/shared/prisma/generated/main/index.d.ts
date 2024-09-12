
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
 * Model Procedure
 * 
 */
export type Procedure = $Result.DefaultSelection<Prisma.$ProcedurePayload>
/**
 * Model NextProcedure
 * 
 */
export type NextProcedure = $Result.DefaultSelection<Prisma.$NextProcedurePayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.procedure`: Exposes CRUD operations for the **Procedure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedure.findMany()
    * ```
    */
  get procedure(): Prisma.ProcedureDelegate<ExtArgs>;

  /**
   * `prisma.nextProcedure`: Exposes CRUD operations for the **NextProcedure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NextProcedures
    * const nextProcedures = await prisma.nextProcedure.findMany()
    * ```
    */
  get nextProcedure(): Prisma.NextProcedureDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Procedure: 'Procedure',
    NextProcedure: 'NextProcedure'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "procedure" | "nextProcedure"
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
      Procedure: {
        payload: Prisma.$ProcedurePayload<ExtArgs>
        fields: Prisma.ProcedureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findFirst: {
            args: Prisma.ProcedureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findMany: {
            args: Prisma.ProcedureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>[]
          }
          create: {
            args: Prisma.ProcedureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          createMany: {
            args: Prisma.ProcedureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcedureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          update: {
            args: Prisma.ProcedureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          deleteMany: {
            args: Prisma.ProcedureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcedureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          aggregate: {
            args: Prisma.ProcedureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedure>
          }
          groupBy: {
            args: Prisma.ProcedureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedureCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedureCountAggregateOutputType> | number
          }
        }
      }
      NextProcedure: {
        payload: Prisma.$NextProcedurePayload<ExtArgs>
        fields: Prisma.NextProcedureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NextProcedureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NextProcedureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          findFirst: {
            args: Prisma.NextProcedureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NextProcedureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          findMany: {
            args: Prisma.NextProcedureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>[]
          }
          create: {
            args: Prisma.NextProcedureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          createMany: {
            args: Prisma.NextProcedureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NextProcedureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          update: {
            args: Prisma.NextProcedureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          deleteMany: {
            args: Prisma.NextProcedureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NextProcedureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NextProcedureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextProcedurePayload>
          }
          aggregate: {
            args: Prisma.NextProcedureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNextProcedure>
          }
          groupBy: {
            args: Prisma.NextProcedureGroupByArgs<ExtArgs>
            result: $Utils.Optional<NextProcedureGroupByOutputType>[]
          }
          count: {
            args: Prisma.NextProcedureCountArgs<ExtArgs>
            result: $Utils.Optional<NextProcedureCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    nextprocedures: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nextprocedures?: boolean | UserCountOutputTypeCountNextproceduresArgs
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
  export type UserCountOutputTypeCountNextproceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextProcedureWhereInput
  }


  /**
   * Count Type ProcedureCountOutputType
   */

  export type ProcedureCountOutputType = {
    nextprocedures: number
  }

  export type ProcedureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nextprocedures?: boolean | ProcedureCountOutputTypeCountNextproceduresArgs
  }

  // Custom InputTypes
  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureCountOutputType
     */
    select?: ProcedureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountNextproceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextProcedureWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    nextprocedures?: boolean | User$nextproceduresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nextprocedures?: boolean | User$nextproceduresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      nextprocedures: Prisma.$NextProcedurePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nextprocedures<T extends User$nextproceduresArgs<ExtArgs> = {}>(args?: Subset<T, User$nextproceduresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findMany"> | Null>
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
  }

  /**
   * User.nextprocedures
   */
  export type User$nextproceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    where?: NextProcedureWhereInput
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    cursor?: NextProcedureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NextProcedureScalarFieldEnum | NextProcedureScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Procedure
   */

  export type AggregateProcedure = {
    _count: ProcedureCountAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  export type ProcedureMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcedureMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcedureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedure to aggregate.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedures
    **/
    _count?: true | ProcedureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedureMaxAggregateInputType
  }

  export type GetProcedureAggregateType<T extends ProcedureAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedure[P]>
      : GetScalarType<T[P], AggregateProcedure[P]>
  }




  export type ProcedureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureWhereInput
    orderBy?: ProcedureOrderByWithAggregationInput | ProcedureOrderByWithAggregationInput[]
    by: ProcedureScalarFieldEnum[] | ProcedureScalarFieldEnum
    having?: ProcedureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedureCountAggregateInputType | true
    _min?: ProcedureMinAggregateInputType
    _max?: ProcedureMaxAggregateInputType
  }

  export type ProcedureGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProcedureCountAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  type GetProcedureGroupByPayload<T extends ProcedureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
        }
      >
    >


  export type ProcedureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nextprocedures?: boolean | Procedure$nextproceduresArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedure"]>


  export type ProcedureSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcedureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nextprocedures?: boolean | Procedure$nextproceduresArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProcedurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedure"
    objects: {
      nextprocedures: Prisma.$NextProcedurePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["procedure"]>
    composites: {}
  }

  type ProcedureGetPayload<S extends boolean | null | undefined | ProcedureDefaultArgs> = $Result.GetResult<Prisma.$ProcedurePayload, S>

  type ProcedureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProcedureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcedureCountAggregateInputType | true
    }

  export interface ProcedureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedure'], meta: { name: 'Procedure' } }
    /**
     * Find zero or one Procedure that matches the filter.
     * @param {ProcedureFindUniqueArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedureFindUniqueArgs>(args: SelectSubset<T, ProcedureFindUniqueArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Procedure that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProcedureFindUniqueOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedureFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Procedure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedureFindFirstArgs>(args?: SelectSubset<T, ProcedureFindFirstArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Procedure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedureFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedures
     * const procedures = await prisma.procedure.findMany()
     * 
     * // Get first 10 Procedures
     * const procedures = await prisma.procedure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedureWithIdOnly = await prisma.procedure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedureFindManyArgs>(args?: SelectSubset<T, ProcedureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Procedure.
     * @param {ProcedureCreateArgs} args - Arguments to create a Procedure.
     * @example
     * // Create one Procedure
     * const Procedure = await prisma.procedure.create({
     *   data: {
     *     // ... data to create a Procedure
     *   }
     * })
     * 
     */
    create<T extends ProcedureCreateArgs>(args: SelectSubset<T, ProcedureCreateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Procedures.
     * @param {ProcedureCreateManyArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedure = await prisma.procedure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedureCreateManyArgs>(args?: SelectSubset<T, ProcedureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Procedure.
     * @param {ProcedureDeleteArgs} args - Arguments to delete one Procedure.
     * @example
     * // Delete one Procedure
     * const Procedure = await prisma.procedure.delete({
     *   where: {
     *     // ... filter to delete one Procedure
     *   }
     * })
     * 
     */
    delete<T extends ProcedureDeleteArgs>(args: SelectSubset<T, ProcedureDeleteArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Procedure.
     * @param {ProcedureUpdateArgs} args - Arguments to update one Procedure.
     * @example
     * // Update one Procedure
     * const procedure = await prisma.procedure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedureUpdateArgs>(args: SelectSubset<T, ProcedureUpdateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Procedures.
     * @param {ProcedureDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedureDeleteManyArgs>(args?: SelectSubset<T, ProcedureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedures
     * const procedure = await prisma.procedure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedureUpdateManyArgs>(args: SelectSubset<T, ProcedureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Procedure.
     * @param {ProcedureUpsertArgs} args - Arguments to update or create a Procedure.
     * @example
     * // Update or create a Procedure
     * const procedure = await prisma.procedure.upsert({
     *   create: {
     *     // ... data to create a Procedure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedure we want to update
     *   }
     * })
     */
    upsert<T extends ProcedureUpsertArgs>(args: SelectSubset<T, ProcedureUpsertArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedure.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends ProcedureCountArgs>(
      args?: Subset<T, ProcedureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcedureAggregateArgs>(args: Subset<T, ProcedureAggregateArgs>): Prisma.PrismaPromise<GetProcedureAggregateType<T>>

    /**
     * Group by Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureGroupByArgs} args - Group by arguments.
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
      T extends ProcedureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedureGroupByArgs['orderBy'] }
        : { orderBy?: ProcedureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcedureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedure model
   */
  readonly fields: ProcedureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nextprocedures<T extends Procedure$nextproceduresArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$nextproceduresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Procedure model
   */ 
  interface ProcedureFieldRefs {
    readonly id: FieldRef<"Procedure", 'String'>
    readonly name: FieldRef<"Procedure", 'String'>
    readonly createdAt: FieldRef<"Procedure", 'DateTime'>
    readonly updatedAt: FieldRef<"Procedure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Procedure findUnique
   */
  export type ProcedureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findUniqueOrThrow
   */
  export type ProcedureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findFirst
   */
  export type ProcedureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findFirstOrThrow
   */
  export type ProcedureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findMany
   */
  export type ProcedureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure create
   */
  export type ProcedureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedure.
     */
    data: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
  }

  /**
   * Procedure createMany
   */
  export type ProcedureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedures.
     */
    data: ProcedureCreateManyInput | ProcedureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedure update
   */
  export type ProcedureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedure.
     */
    data: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
    /**
     * Choose, which Procedure to update.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure updateMany
   */
  export type ProcedureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProcedureUpdateManyMutationInput, ProcedureUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProcedureWhereInput
  }

  /**
   * Procedure upsert
   */
  export type ProcedureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedure to update in case it exists.
     */
    where: ProcedureWhereUniqueInput
    /**
     * In case the Procedure found by the `where` argument doesn't exist, create a new Procedure with this data.
     */
    create: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
    /**
     * In case the Procedure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
  }

  /**
   * Procedure delete
   */
  export type ProcedureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter which Procedure to delete.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure deleteMany
   */
  export type ProcedureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to delete
     */
    where?: ProcedureWhereInput
  }

  /**
   * Procedure.nextprocedures
   */
  export type Procedure$nextproceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    where?: NextProcedureWhereInput
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    cursor?: NextProcedureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NextProcedureScalarFieldEnum | NextProcedureScalarFieldEnum[]
  }

  /**
   * Procedure without action
   */
  export type ProcedureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
  }


  /**
   * Model NextProcedure
   */

  export type AggregateNextProcedure = {
    _count: NextProcedureCountAggregateOutputType | null
    _avg: NextProcedureAvgAggregateOutputType | null
    _sum: NextProcedureSumAggregateOutputType | null
    _min: NextProcedureMinAggregateOutputType | null
    _max: NextProcedureMaxAggregateOutputType | null
  }

  export type NextProcedureAvgAggregateOutputType = {
    weight: number | null
  }

  export type NextProcedureSumAggregateOutputType = {
    weight: number | null
  }

  export type NextProcedureMinAggregateOutputType = {
    id: string | null
    weight: number | null
    procedureId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextProcedureMaxAggregateOutputType = {
    id: string | null
    weight: number | null
    procedureId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextProcedureCountAggregateOutputType = {
    id: number
    weight: number
    procedureId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NextProcedureAvgAggregateInputType = {
    weight?: true
  }

  export type NextProcedureSumAggregateInputType = {
    weight?: true
  }

  export type NextProcedureMinAggregateInputType = {
    id?: true
    weight?: true
    procedureId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextProcedureMaxAggregateInputType = {
    id?: true
    weight?: true
    procedureId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextProcedureCountAggregateInputType = {
    id?: true
    weight?: true
    procedureId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NextProcedureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextProcedure to aggregate.
     */
    where?: NextProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextProcedures to fetch.
     */
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NextProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextProcedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextProcedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NextProcedures
    **/
    _count?: true | NextProcedureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NextProcedureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NextProcedureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NextProcedureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NextProcedureMaxAggregateInputType
  }

  export type GetNextProcedureAggregateType<T extends NextProcedureAggregateArgs> = {
        [P in keyof T & keyof AggregateNextProcedure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNextProcedure[P]>
      : GetScalarType<T[P], AggregateNextProcedure[P]>
  }




  export type NextProcedureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextProcedureWhereInput
    orderBy?: NextProcedureOrderByWithAggregationInput | NextProcedureOrderByWithAggregationInput[]
    by: NextProcedureScalarFieldEnum[] | NextProcedureScalarFieldEnum
    having?: NextProcedureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NextProcedureCountAggregateInputType | true
    _avg?: NextProcedureAvgAggregateInputType
    _sum?: NextProcedureSumAggregateInputType
    _min?: NextProcedureMinAggregateInputType
    _max?: NextProcedureMaxAggregateInputType
  }

  export type NextProcedureGroupByOutputType = {
    id: string
    weight: number
    procedureId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: NextProcedureCountAggregateOutputType | null
    _avg: NextProcedureAvgAggregateOutputType | null
    _sum: NextProcedureSumAggregateOutputType | null
    _min: NextProcedureMinAggregateOutputType | null
    _max: NextProcedureMaxAggregateOutputType | null
  }

  type GetNextProcedureGroupByPayload<T extends NextProcedureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NextProcedureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NextProcedureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NextProcedureGroupByOutputType[P]>
            : GetScalarType<T[P], NextProcedureGroupByOutputType[P]>
        }
      >
    >


  export type NextProcedureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    procedureId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nextProcedure"]>


  export type NextProcedureSelectScalar = {
    id?: boolean
    weight?: boolean
    procedureId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NextProcedureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NextProcedurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NextProcedure"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weight: number
      procedureId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nextProcedure"]>
    composites: {}
  }

  type NextProcedureGetPayload<S extends boolean | null | undefined | NextProcedureDefaultArgs> = $Result.GetResult<Prisma.$NextProcedurePayload, S>

  type NextProcedureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NextProcedureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NextProcedureCountAggregateInputType | true
    }

  export interface NextProcedureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NextProcedure'], meta: { name: 'NextProcedure' } }
    /**
     * Find zero or one NextProcedure that matches the filter.
     * @param {NextProcedureFindUniqueArgs} args - Arguments to find a NextProcedure
     * @example
     * // Get one NextProcedure
     * const nextProcedure = await prisma.nextProcedure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NextProcedureFindUniqueArgs>(args: SelectSubset<T, NextProcedureFindUniqueArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NextProcedure that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NextProcedureFindUniqueOrThrowArgs} args - Arguments to find a NextProcedure
     * @example
     * // Get one NextProcedure
     * const nextProcedure = await prisma.nextProcedure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NextProcedureFindUniqueOrThrowArgs>(args: SelectSubset<T, NextProcedureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NextProcedure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureFindFirstArgs} args - Arguments to find a NextProcedure
     * @example
     * // Get one NextProcedure
     * const nextProcedure = await prisma.nextProcedure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NextProcedureFindFirstArgs>(args?: SelectSubset<T, NextProcedureFindFirstArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NextProcedure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureFindFirstOrThrowArgs} args - Arguments to find a NextProcedure
     * @example
     * // Get one NextProcedure
     * const nextProcedure = await prisma.nextProcedure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NextProcedureFindFirstOrThrowArgs>(args?: SelectSubset<T, NextProcedureFindFirstOrThrowArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NextProcedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NextProcedures
     * const nextProcedures = await prisma.nextProcedure.findMany()
     * 
     * // Get first 10 NextProcedures
     * const nextProcedures = await prisma.nextProcedure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nextProcedureWithIdOnly = await prisma.nextProcedure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NextProcedureFindManyArgs>(args?: SelectSubset<T, NextProcedureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NextProcedure.
     * @param {NextProcedureCreateArgs} args - Arguments to create a NextProcedure.
     * @example
     * // Create one NextProcedure
     * const NextProcedure = await prisma.nextProcedure.create({
     *   data: {
     *     // ... data to create a NextProcedure
     *   }
     * })
     * 
     */
    create<T extends NextProcedureCreateArgs>(args: SelectSubset<T, NextProcedureCreateArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NextProcedures.
     * @param {NextProcedureCreateManyArgs} args - Arguments to create many NextProcedures.
     * @example
     * // Create many NextProcedures
     * const nextProcedure = await prisma.nextProcedure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NextProcedureCreateManyArgs>(args?: SelectSubset<T, NextProcedureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NextProcedure.
     * @param {NextProcedureDeleteArgs} args - Arguments to delete one NextProcedure.
     * @example
     * // Delete one NextProcedure
     * const NextProcedure = await prisma.nextProcedure.delete({
     *   where: {
     *     // ... filter to delete one NextProcedure
     *   }
     * })
     * 
     */
    delete<T extends NextProcedureDeleteArgs>(args: SelectSubset<T, NextProcedureDeleteArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NextProcedure.
     * @param {NextProcedureUpdateArgs} args - Arguments to update one NextProcedure.
     * @example
     * // Update one NextProcedure
     * const nextProcedure = await prisma.nextProcedure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NextProcedureUpdateArgs>(args: SelectSubset<T, NextProcedureUpdateArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NextProcedures.
     * @param {NextProcedureDeleteManyArgs} args - Arguments to filter NextProcedures to delete.
     * @example
     * // Delete a few NextProcedures
     * const { count } = await prisma.nextProcedure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NextProcedureDeleteManyArgs>(args?: SelectSubset<T, NextProcedureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextProcedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NextProcedures
     * const nextProcedure = await prisma.nextProcedure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NextProcedureUpdateManyArgs>(args: SelectSubset<T, NextProcedureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NextProcedure.
     * @param {NextProcedureUpsertArgs} args - Arguments to update or create a NextProcedure.
     * @example
     * // Update or create a NextProcedure
     * const nextProcedure = await prisma.nextProcedure.upsert({
     *   create: {
     *     // ... data to create a NextProcedure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NextProcedure we want to update
     *   }
     * })
     */
    upsert<T extends NextProcedureUpsertArgs>(args: SelectSubset<T, NextProcedureUpsertArgs<ExtArgs>>): Prisma__NextProcedureClient<$Result.GetResult<Prisma.$NextProcedurePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NextProcedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureCountArgs} args - Arguments to filter NextProcedures to count.
     * @example
     * // Count the number of NextProcedures
     * const count = await prisma.nextProcedure.count({
     *   where: {
     *     // ... the filter for the NextProcedures we want to count
     *   }
     * })
    **/
    count<T extends NextProcedureCountArgs>(
      args?: Subset<T, NextProcedureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NextProcedureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NextProcedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NextProcedureAggregateArgs>(args: Subset<T, NextProcedureAggregateArgs>): Prisma.PrismaPromise<GetNextProcedureAggregateType<T>>

    /**
     * Group by NextProcedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextProcedureGroupByArgs} args - Group by arguments.
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
      T extends NextProcedureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NextProcedureGroupByArgs['orderBy'] }
        : { orderBy?: NextProcedureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NextProcedureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNextProcedureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NextProcedure model
   */
  readonly fields: NextProcedureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NextProcedure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NextProcedureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the NextProcedure model
   */ 
  interface NextProcedureFieldRefs {
    readonly id: FieldRef<"NextProcedure", 'String'>
    readonly weight: FieldRef<"NextProcedure", 'Int'>
    readonly procedureId: FieldRef<"NextProcedure", 'String'>
    readonly userId: FieldRef<"NextProcedure", 'String'>
    readonly createdAt: FieldRef<"NextProcedure", 'DateTime'>
    readonly updatedAt: FieldRef<"NextProcedure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NextProcedure findUnique
   */
  export type NextProcedureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter, which NextProcedure to fetch.
     */
    where: NextProcedureWhereUniqueInput
  }

  /**
   * NextProcedure findUniqueOrThrow
   */
  export type NextProcedureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter, which NextProcedure to fetch.
     */
    where: NextProcedureWhereUniqueInput
  }

  /**
   * NextProcedure findFirst
   */
  export type NextProcedureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter, which NextProcedure to fetch.
     */
    where?: NextProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextProcedures to fetch.
     */
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextProcedures.
     */
    cursor?: NextProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextProcedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextProcedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextProcedures.
     */
    distinct?: NextProcedureScalarFieldEnum | NextProcedureScalarFieldEnum[]
  }

  /**
   * NextProcedure findFirstOrThrow
   */
  export type NextProcedureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter, which NextProcedure to fetch.
     */
    where?: NextProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextProcedures to fetch.
     */
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextProcedures.
     */
    cursor?: NextProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextProcedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextProcedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextProcedures.
     */
    distinct?: NextProcedureScalarFieldEnum | NextProcedureScalarFieldEnum[]
  }

  /**
   * NextProcedure findMany
   */
  export type NextProcedureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter, which NextProcedures to fetch.
     */
    where?: NextProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextProcedures to fetch.
     */
    orderBy?: NextProcedureOrderByWithRelationInput | NextProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NextProcedures.
     */
    cursor?: NextProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextProcedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextProcedures.
     */
    skip?: number
    distinct?: NextProcedureScalarFieldEnum | NextProcedureScalarFieldEnum[]
  }

  /**
   * NextProcedure create
   */
  export type NextProcedureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * The data needed to create a NextProcedure.
     */
    data: XOR<NextProcedureCreateInput, NextProcedureUncheckedCreateInput>
  }

  /**
   * NextProcedure createMany
   */
  export type NextProcedureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NextProcedures.
     */
    data: NextProcedureCreateManyInput | NextProcedureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NextProcedure update
   */
  export type NextProcedureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * The data needed to update a NextProcedure.
     */
    data: XOR<NextProcedureUpdateInput, NextProcedureUncheckedUpdateInput>
    /**
     * Choose, which NextProcedure to update.
     */
    where: NextProcedureWhereUniqueInput
  }

  /**
   * NextProcedure updateMany
   */
  export type NextProcedureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NextProcedures.
     */
    data: XOR<NextProcedureUpdateManyMutationInput, NextProcedureUncheckedUpdateManyInput>
    /**
     * Filter which NextProcedures to update
     */
    where?: NextProcedureWhereInput
  }

  /**
   * NextProcedure upsert
   */
  export type NextProcedureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * The filter to search for the NextProcedure to update in case it exists.
     */
    where: NextProcedureWhereUniqueInput
    /**
     * In case the NextProcedure found by the `where` argument doesn't exist, create a new NextProcedure with this data.
     */
    create: XOR<NextProcedureCreateInput, NextProcedureUncheckedCreateInput>
    /**
     * In case the NextProcedure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NextProcedureUpdateInput, NextProcedureUncheckedUpdateInput>
  }

  /**
   * NextProcedure delete
   */
  export type NextProcedureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
    /**
     * Filter which NextProcedure to delete.
     */
    where: NextProcedureWhereUniqueInput
  }

  /**
   * NextProcedure deleteMany
   */
  export type NextProcedureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextProcedures to delete
     */
    where?: NextProcedureWhereInput
  }

  /**
   * NextProcedure without action
   */
  export type NextProcedureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextProcedure
     */
    select?: NextProcedureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextProcedureInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProcedureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcedureScalarFieldEnum = (typeof ProcedureScalarFieldEnum)[keyof typeof ProcedureScalarFieldEnum]


  export const NextProcedureScalarFieldEnum: {
    id: 'id',
    weight: 'weight',
    procedureId: 'procedureId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NextProcedureScalarFieldEnum = (typeof NextProcedureScalarFieldEnum)[keyof typeof NextProcedureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nextprocedures?: NextProcedureListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextprocedures?: NextProcedureOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nextprocedures?: NextProcedureListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProcedureWhereInput = {
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    id?: StringFilter<"Procedure"> | string
    name?: StringFilter<"Procedure"> | string
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    nextprocedures?: NextProcedureListRelationFilter
  }

  export type ProcedureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nextprocedures?: NextProcedureOrderByRelationAggregateInput
  }

  export type ProcedureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    name?: StringFilter<"Procedure"> | string
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    nextprocedures?: NextProcedureListRelationFilter
  }, "id">

  export type ProcedureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcedureCountOrderByAggregateInput
    _max?: ProcedureMaxOrderByAggregateInput
    _min?: ProcedureMinOrderByAggregateInput
  }

  export type ProcedureScalarWhereWithAggregatesInput = {
    AND?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    OR?: ProcedureScalarWhereWithAggregatesInput[]
    NOT?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Procedure"> | string
    name?: StringWithAggregatesFilter<"Procedure"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
  }

  export type NextProcedureWhereInput = {
    AND?: NextProcedureWhereInput | NextProcedureWhereInput[]
    OR?: NextProcedureWhereInput[]
    NOT?: NextProcedureWhereInput | NextProcedureWhereInput[]
    id?: StringFilter<"NextProcedure"> | string
    weight?: IntFilter<"NextProcedure"> | number
    procedureId?: StringFilter<"NextProcedure"> | string
    userId?: StringFilter<"NextProcedure"> | string
    createdAt?: DateTimeFilter<"NextProcedure"> | Date | string
    updatedAt?: DateTimeFilter<"NextProcedure"> | Date | string
    procedure?: XOR<ProcedureRelationFilter, ProcedureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NextProcedureOrderByWithRelationInput = {
    id?: SortOrder
    weight?: SortOrder
    procedureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NextProcedureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NextProcedureWhereInput | NextProcedureWhereInput[]
    OR?: NextProcedureWhereInput[]
    NOT?: NextProcedureWhereInput | NextProcedureWhereInput[]
    weight?: IntFilter<"NextProcedure"> | number
    procedureId?: StringFilter<"NextProcedure"> | string
    userId?: StringFilter<"NextProcedure"> | string
    createdAt?: DateTimeFilter<"NextProcedure"> | Date | string
    updatedAt?: DateTimeFilter<"NextProcedure"> | Date | string
    procedure?: XOR<ProcedureRelationFilter, ProcedureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NextProcedureOrderByWithAggregationInput = {
    id?: SortOrder
    weight?: SortOrder
    procedureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NextProcedureCountOrderByAggregateInput
    _avg?: NextProcedureAvgOrderByAggregateInput
    _max?: NextProcedureMaxOrderByAggregateInput
    _min?: NextProcedureMinOrderByAggregateInput
    _sum?: NextProcedureSumOrderByAggregateInput
  }

  export type NextProcedureScalarWhereWithAggregatesInput = {
    AND?: NextProcedureScalarWhereWithAggregatesInput | NextProcedureScalarWhereWithAggregatesInput[]
    OR?: NextProcedureScalarWhereWithAggregatesInput[]
    NOT?: NextProcedureScalarWhereWithAggregatesInput | NextProcedureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NextProcedure"> | string
    weight?: IntWithAggregatesFilter<"NextProcedure"> | number
    procedureId?: StringWithAggregatesFilter<"NextProcedure"> | string
    userId?: StringWithAggregatesFilter<"NextProcedure"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NextProcedure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NextProcedure"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nextprocedures?: NextProcedureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nextprocedures?: NextProcedureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextprocedures?: NextProcedureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextprocedures?: NextProcedureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nextprocedures?: NextProcedureCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nextprocedures?: NextProcedureUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextprocedures?: NextProcedureUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextprocedures?: NextProcedureUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureCreateInput = {
    id?: string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    procedure: ProcedureCreateNestedOneWithoutNextproceduresInput
    user: UserCreateNestedOneWithoutNextproceduresInput
  }

  export type NextProcedureUncheckedCreateInput = {
    id?: string
    weight: number
    procedureId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProcedureUpdateOneRequiredWithoutNextproceduresNestedInput
    user?: UserUpdateOneRequiredWithoutNextproceduresNestedInput
  }

  export type NextProcedureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    procedureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureCreateManyInput = {
    id?: string
    weight: number
    procedureId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    procedureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NextProcedureListRelationFilter = {
    every?: NextProcedureWhereInput
    some?: NextProcedureWhereInput
    none?: NextProcedureWhereInput
  }

  export type NextProcedureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProcedureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProcedureRelationFilter = {
    is?: ProcedureWhereInput
    isNot?: ProcedureWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NextProcedureCountOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    procedureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextProcedureAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type NextProcedureMaxOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    procedureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextProcedureMinOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    procedureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextProcedureSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NextProcedureCreateNestedManyWithoutUserInput = {
    create?: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput> | NextProcedureCreateWithoutUserInput[] | NextProcedureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutUserInput | NextProcedureCreateOrConnectWithoutUserInput[]
    createMany?: NextProcedureCreateManyUserInputEnvelope
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
  }

  export type NextProcedureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput> | NextProcedureCreateWithoutUserInput[] | NextProcedureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutUserInput | NextProcedureCreateOrConnectWithoutUserInput[]
    createMany?: NextProcedureCreateManyUserInputEnvelope
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NextProcedureUpdateManyWithoutUserNestedInput = {
    create?: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput> | NextProcedureCreateWithoutUserInput[] | NextProcedureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutUserInput | NextProcedureCreateOrConnectWithoutUserInput[]
    upsert?: NextProcedureUpsertWithWhereUniqueWithoutUserInput | NextProcedureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NextProcedureCreateManyUserInputEnvelope
    set?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    disconnect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    delete?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    update?: NextProcedureUpdateWithWhereUniqueWithoutUserInput | NextProcedureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NextProcedureUpdateManyWithWhereWithoutUserInput | NextProcedureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
  }

  export type NextProcedureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput> | NextProcedureCreateWithoutUserInput[] | NextProcedureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutUserInput | NextProcedureCreateOrConnectWithoutUserInput[]
    upsert?: NextProcedureUpsertWithWhereUniqueWithoutUserInput | NextProcedureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NextProcedureCreateManyUserInputEnvelope
    set?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    disconnect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    delete?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    update?: NextProcedureUpdateWithWhereUniqueWithoutUserInput | NextProcedureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NextProcedureUpdateManyWithWhereWithoutUserInput | NextProcedureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
  }

  export type NextProcedureCreateNestedManyWithoutProcedureInput = {
    create?: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput> | NextProcedureCreateWithoutProcedureInput[] | NextProcedureUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutProcedureInput | NextProcedureCreateOrConnectWithoutProcedureInput[]
    createMany?: NextProcedureCreateManyProcedureInputEnvelope
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
  }

  export type NextProcedureUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput> | NextProcedureCreateWithoutProcedureInput[] | NextProcedureUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutProcedureInput | NextProcedureCreateOrConnectWithoutProcedureInput[]
    createMany?: NextProcedureCreateManyProcedureInputEnvelope
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
  }

  export type NextProcedureUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput> | NextProcedureCreateWithoutProcedureInput[] | NextProcedureUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutProcedureInput | NextProcedureCreateOrConnectWithoutProcedureInput[]
    upsert?: NextProcedureUpsertWithWhereUniqueWithoutProcedureInput | NextProcedureUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: NextProcedureCreateManyProcedureInputEnvelope
    set?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    disconnect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    delete?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    update?: NextProcedureUpdateWithWhereUniqueWithoutProcedureInput | NextProcedureUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: NextProcedureUpdateManyWithWhereWithoutProcedureInput | NextProcedureUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
  }

  export type NextProcedureUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput> | NextProcedureCreateWithoutProcedureInput[] | NextProcedureUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: NextProcedureCreateOrConnectWithoutProcedureInput | NextProcedureCreateOrConnectWithoutProcedureInput[]
    upsert?: NextProcedureUpsertWithWhereUniqueWithoutProcedureInput | NextProcedureUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: NextProcedureCreateManyProcedureInputEnvelope
    set?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    disconnect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    delete?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    connect?: NextProcedureWhereUniqueInput | NextProcedureWhereUniqueInput[]
    update?: NextProcedureUpdateWithWhereUniqueWithoutProcedureInput | NextProcedureUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: NextProcedureUpdateManyWithWhereWithoutProcedureInput | NextProcedureUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
  }

  export type ProcedureCreateNestedOneWithoutNextproceduresInput = {
    create?: XOR<ProcedureCreateWithoutNextproceduresInput, ProcedureUncheckedCreateWithoutNextproceduresInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutNextproceduresInput
    connect?: ProcedureWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNextproceduresInput = {
    create?: XOR<UserCreateWithoutNextproceduresInput, UserUncheckedCreateWithoutNextproceduresInput>
    connectOrCreate?: UserCreateOrConnectWithoutNextproceduresInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProcedureUpdateOneRequiredWithoutNextproceduresNestedInput = {
    create?: XOR<ProcedureCreateWithoutNextproceduresInput, ProcedureUncheckedCreateWithoutNextproceduresInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutNextproceduresInput
    upsert?: ProcedureUpsertWithoutNextproceduresInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutNextproceduresInput, ProcedureUpdateWithoutNextproceduresInput>, ProcedureUncheckedUpdateWithoutNextproceduresInput>
  }

  export type UserUpdateOneRequiredWithoutNextproceduresNestedInput = {
    create?: XOR<UserCreateWithoutNextproceduresInput, UserUncheckedCreateWithoutNextproceduresInput>
    connectOrCreate?: UserCreateOrConnectWithoutNextproceduresInput
    upsert?: UserUpsertWithoutNextproceduresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNextproceduresInput, UserUpdateWithoutNextproceduresInput>, UserUncheckedUpdateWithoutNextproceduresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NextProcedureCreateWithoutUserInput = {
    id?: string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    procedure: ProcedureCreateNestedOneWithoutNextproceduresInput
  }

  export type NextProcedureUncheckedCreateWithoutUserInput = {
    id?: string
    weight: number
    procedureId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureCreateOrConnectWithoutUserInput = {
    where: NextProcedureWhereUniqueInput
    create: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput>
  }

  export type NextProcedureCreateManyUserInputEnvelope = {
    data: NextProcedureCreateManyUserInput | NextProcedureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NextProcedureUpsertWithWhereUniqueWithoutUserInput = {
    where: NextProcedureWhereUniqueInput
    update: XOR<NextProcedureUpdateWithoutUserInput, NextProcedureUncheckedUpdateWithoutUserInput>
    create: XOR<NextProcedureCreateWithoutUserInput, NextProcedureUncheckedCreateWithoutUserInput>
  }

  export type NextProcedureUpdateWithWhereUniqueWithoutUserInput = {
    where: NextProcedureWhereUniqueInput
    data: XOR<NextProcedureUpdateWithoutUserInput, NextProcedureUncheckedUpdateWithoutUserInput>
  }

  export type NextProcedureUpdateManyWithWhereWithoutUserInput = {
    where: NextProcedureScalarWhereInput
    data: XOR<NextProcedureUpdateManyMutationInput, NextProcedureUncheckedUpdateManyWithoutUserInput>
  }

  export type NextProcedureScalarWhereInput = {
    AND?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
    OR?: NextProcedureScalarWhereInput[]
    NOT?: NextProcedureScalarWhereInput | NextProcedureScalarWhereInput[]
    id?: StringFilter<"NextProcedure"> | string
    weight?: IntFilter<"NextProcedure"> | number
    procedureId?: StringFilter<"NextProcedure"> | string
    userId?: StringFilter<"NextProcedure"> | string
    createdAt?: DateTimeFilter<"NextProcedure"> | Date | string
    updatedAt?: DateTimeFilter<"NextProcedure"> | Date | string
  }

  export type NextProcedureCreateWithoutProcedureInput = {
    id?: string
    weight: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNextproceduresInput
  }

  export type NextProcedureUncheckedCreateWithoutProcedureInput = {
    id?: string
    weight: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureCreateOrConnectWithoutProcedureInput = {
    where: NextProcedureWhereUniqueInput
    create: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput>
  }

  export type NextProcedureCreateManyProcedureInputEnvelope = {
    data: NextProcedureCreateManyProcedureInput | NextProcedureCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type NextProcedureUpsertWithWhereUniqueWithoutProcedureInput = {
    where: NextProcedureWhereUniqueInput
    update: XOR<NextProcedureUpdateWithoutProcedureInput, NextProcedureUncheckedUpdateWithoutProcedureInput>
    create: XOR<NextProcedureCreateWithoutProcedureInput, NextProcedureUncheckedCreateWithoutProcedureInput>
  }

  export type NextProcedureUpdateWithWhereUniqueWithoutProcedureInput = {
    where: NextProcedureWhereUniqueInput
    data: XOR<NextProcedureUpdateWithoutProcedureInput, NextProcedureUncheckedUpdateWithoutProcedureInput>
  }

  export type NextProcedureUpdateManyWithWhereWithoutProcedureInput = {
    where: NextProcedureScalarWhereInput
    data: XOR<NextProcedureUpdateManyMutationInput, NextProcedureUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ProcedureCreateWithoutNextproceduresInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureUncheckedCreateWithoutNextproceduresInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureCreateOrConnectWithoutNextproceduresInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutNextproceduresInput, ProcedureUncheckedCreateWithoutNextproceduresInput>
  }

  export type UserCreateWithoutNextproceduresInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNextproceduresInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNextproceduresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNextproceduresInput, UserUncheckedCreateWithoutNextproceduresInput>
  }

  export type ProcedureUpsertWithoutNextproceduresInput = {
    update: XOR<ProcedureUpdateWithoutNextproceduresInput, ProcedureUncheckedUpdateWithoutNextproceduresInput>
    create: XOR<ProcedureCreateWithoutNextproceduresInput, ProcedureUncheckedCreateWithoutNextproceduresInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutNextproceduresInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutNextproceduresInput, ProcedureUncheckedUpdateWithoutNextproceduresInput>
  }

  export type ProcedureUpdateWithoutNextproceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUncheckedUpdateWithoutNextproceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNextproceduresInput = {
    update: XOR<UserUpdateWithoutNextproceduresInput, UserUncheckedUpdateWithoutNextproceduresInput>
    create: XOR<UserCreateWithoutNextproceduresInput, UserUncheckedCreateWithoutNextproceduresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNextproceduresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNextproceduresInput, UserUncheckedUpdateWithoutNextproceduresInput>
  }

  export type UserUpdateWithoutNextproceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNextproceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureCreateManyUserInput = {
    id?: string
    weight: number
    procedureId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProcedureUpdateOneRequiredWithoutNextproceduresNestedInput
  }

  export type NextProcedureUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    procedureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    procedureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureCreateManyProcedureInput = {
    id?: string
    weight: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextProcedureUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNextproceduresNestedInput
  }

  export type NextProcedureUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextProcedureUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcedureCountOutputTypeDefaultArgs instead
     */
    export type ProcedureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcedureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcedureDefaultArgs instead
     */
    export type ProcedureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcedureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NextProcedureDefaultArgs instead
     */
    export type NextProcedureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NextProcedureDefaultArgs<ExtArgs>

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