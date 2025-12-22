
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
 * Model UserMusic
 * 
 */
export type UserMusic = $Result.DefaultSelection<Prisma.$UserMusicPayload>
/**
 * Model Music
 * 
 */
export type Music = $Result.DefaultSelection<Prisma.$MusicPayload>

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
   * `prisma.userMusic`: Exposes CRUD operations for the **UserMusic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMusics
    * const userMusics = await prisma.userMusic.findMany()
    * ```
    */
  get userMusic(): Prisma.UserMusicDelegate<ExtArgs>;

  /**
   * `prisma.music`: Exposes CRUD operations for the **Music** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Music
    * const music = await prisma.music.findMany()
    * ```
    */
  get music(): Prisma.MusicDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    UserMusic: 'UserMusic',
    Music: 'Music'
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
      modelProps: "user" | "userMusic" | "music"
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
      UserMusic: {
        payload: Prisma.$UserMusicPayload<ExtArgs>
        fields: Prisma.UserMusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          findFirst: {
            args: Prisma.UserMusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          findMany: {
            args: Prisma.UserMusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>[]
          }
          create: {
            args: Prisma.UserMusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          createMany: {
            args: Prisma.UserMusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMusicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>[]
          }
          delete: {
            args: Prisma.UserMusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          update: {
            args: Prisma.UserMusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          deleteMany: {
            args: Prisma.UserMusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMusicPayload>
          }
          aggregate: {
            args: Prisma.UserMusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMusic>
          }
          groupBy: {
            args: Prisma.UserMusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMusicCountArgs<ExtArgs>
            result: $Utils.Optional<UserMusicCountAggregateOutputType> | number
          }
        }
      }
      Music: {
        payload: Prisma.$MusicPayload<ExtArgs>
        fields: Prisma.MusicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findFirst: {
            args: Prisma.MusicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          findMany: {
            args: Prisma.MusicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>[]
          }
          create: {
            args: Prisma.MusicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          createMany: {
            args: Prisma.MusicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>[]
          }
          delete: {
            args: Prisma.MusicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          update: {
            args: Prisma.MusicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          deleteMany: {
            args: Prisma.MusicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicPayload>
          }
          aggregate: {
            args: Prisma.MusicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusic>
          }
          groupBy: {
            args: Prisma.MusicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicCountArgs<ExtArgs>
            result: $Utils.Optional<MusicCountAggregateOutputType> | number
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
    musics: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musics?: boolean | UserCountOutputTypeCountMusicsArgs
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
  export type UserCountOutputTypeCountMusicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMusicWhereInput
  }


  /**
   * Count Type MusicCountOutputType
   */

  export type MusicCountOutputType = {
    users: number
  }

  export type MusicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MusicCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicCountOutputType
     */
    select?: MusicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicCountOutputType without action
   */
  export type MusicCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMusicWhereInput
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
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
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
    musics?: boolean | User$musicsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musics?: boolean | User$musicsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      musics: Prisma.$UserMusicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    musics<T extends User$musicsArgs<ExtArgs> = {}>(args?: Subset<T, User$musicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findMany"> | Null>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
   * User.musics
   */
  export type User$musicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    where?: UserMusicWhereInput
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    cursor?: UserMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMusicScalarFieldEnum | UserMusicScalarFieldEnum[]
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
   * Model UserMusic
   */

  export type AggregateUserMusic = {
    _count: UserMusicCountAggregateOutputType | null
    _min: UserMusicMinAggregateOutputType | null
    _max: UserMusicMaxAggregateOutputType | null
  }

  export type UserMusicMinAggregateOutputType = {
    userId: string | null
    musicId: string | null
    addedAt: Date | null
  }

  export type UserMusicMaxAggregateOutputType = {
    userId: string | null
    musicId: string | null
    addedAt: Date | null
  }

  export type UserMusicCountAggregateOutputType = {
    userId: number
    musicId: number
    addedAt: number
    _all: number
  }


  export type UserMusicMinAggregateInputType = {
    userId?: true
    musicId?: true
    addedAt?: true
  }

  export type UserMusicMaxAggregateInputType = {
    userId?: true
    musicId?: true
    addedAt?: true
  }

  export type UserMusicCountAggregateInputType = {
    userId?: true
    musicId?: true
    addedAt?: true
    _all?: true
  }

  export type UserMusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMusic to aggregate.
     */
    where?: UserMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMusics to fetch.
     */
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMusics
    **/
    _count?: true | UserMusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMusicMaxAggregateInputType
  }

  export type GetUserMusicAggregateType<T extends UserMusicAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMusic[P]>
      : GetScalarType<T[P], AggregateUserMusic[P]>
  }




  export type UserMusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMusicWhereInput
    orderBy?: UserMusicOrderByWithAggregationInput | UserMusicOrderByWithAggregationInput[]
    by: UserMusicScalarFieldEnum[] | UserMusicScalarFieldEnum
    having?: UserMusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMusicCountAggregateInputType | true
    _min?: UserMusicMinAggregateInputType
    _max?: UserMusicMaxAggregateInputType
  }

  export type UserMusicGroupByOutputType = {
    userId: string
    musicId: string
    addedAt: Date
    _count: UserMusicCountAggregateOutputType | null
    _min: UserMusicMinAggregateOutputType | null
    _max: UserMusicMaxAggregateOutputType | null
  }

  type GetUserMusicGroupByPayload<T extends UserMusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMusicGroupByOutputType[P]>
            : GetScalarType<T[P], UserMusicGroupByOutputType[P]>
        }
      >
    >


  export type UserMusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    musicId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMusic"]>

  export type UserMusicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    musicId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMusic"]>

  export type UserMusicSelectScalar = {
    userId?: boolean
    musicId?: boolean
    addedAt?: boolean
  }

  export type UserMusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }
  export type UserMusicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    music?: boolean | MusicDefaultArgs<ExtArgs>
  }

  export type $UserMusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMusic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      music: Prisma.$MusicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      musicId: string
      addedAt: Date
    }, ExtArgs["result"]["userMusic"]>
    composites: {}
  }

  type UserMusicGetPayload<S extends boolean | null | undefined | UserMusicDefaultArgs> = $Result.GetResult<Prisma.$UserMusicPayload, S>

  type UserMusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserMusicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserMusicCountAggregateInputType | true
    }

  export interface UserMusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMusic'], meta: { name: 'UserMusic' } }
    /**
     * Find zero or one UserMusic that matches the filter.
     * @param {UserMusicFindUniqueArgs} args - Arguments to find a UserMusic
     * @example
     * // Get one UserMusic
     * const userMusic = await prisma.userMusic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMusicFindUniqueArgs>(args: SelectSubset<T, UserMusicFindUniqueArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserMusic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserMusicFindUniqueOrThrowArgs} args - Arguments to find a UserMusic
     * @example
     * // Get one UserMusic
     * const userMusic = await prisma.userMusic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMusicFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserMusic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicFindFirstArgs} args - Arguments to find a UserMusic
     * @example
     * // Get one UserMusic
     * const userMusic = await prisma.userMusic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMusicFindFirstArgs>(args?: SelectSubset<T, UserMusicFindFirstArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserMusic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicFindFirstOrThrowArgs} args - Arguments to find a UserMusic
     * @example
     * // Get one UserMusic
     * const userMusic = await prisma.userMusic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMusicFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserMusics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMusics
     * const userMusics = await prisma.userMusic.findMany()
     * 
     * // Get first 10 UserMusics
     * const userMusics = await prisma.userMusic.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userMusicWithUserIdOnly = await prisma.userMusic.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserMusicFindManyArgs>(args?: SelectSubset<T, UserMusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserMusic.
     * @param {UserMusicCreateArgs} args - Arguments to create a UserMusic.
     * @example
     * // Create one UserMusic
     * const UserMusic = await prisma.userMusic.create({
     *   data: {
     *     // ... data to create a UserMusic
     *   }
     * })
     * 
     */
    create<T extends UserMusicCreateArgs>(args: SelectSubset<T, UserMusicCreateArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserMusics.
     * @param {UserMusicCreateManyArgs} args - Arguments to create many UserMusics.
     * @example
     * // Create many UserMusics
     * const userMusic = await prisma.userMusic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMusicCreateManyArgs>(args?: SelectSubset<T, UserMusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMusics and returns the data saved in the database.
     * @param {UserMusicCreateManyAndReturnArgs} args - Arguments to create many UserMusics.
     * @example
     * // Create many UserMusics
     * const userMusic = await prisma.userMusic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMusics and only return the `userId`
     * const userMusicWithUserIdOnly = await prisma.userMusic.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMusicCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMusicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserMusic.
     * @param {UserMusicDeleteArgs} args - Arguments to delete one UserMusic.
     * @example
     * // Delete one UserMusic
     * const UserMusic = await prisma.userMusic.delete({
     *   where: {
     *     // ... filter to delete one UserMusic
     *   }
     * })
     * 
     */
    delete<T extends UserMusicDeleteArgs>(args: SelectSubset<T, UserMusicDeleteArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserMusic.
     * @param {UserMusicUpdateArgs} args - Arguments to update one UserMusic.
     * @example
     * // Update one UserMusic
     * const userMusic = await prisma.userMusic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMusicUpdateArgs>(args: SelectSubset<T, UserMusicUpdateArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserMusics.
     * @param {UserMusicDeleteManyArgs} args - Arguments to filter UserMusics to delete.
     * @example
     * // Delete a few UserMusics
     * const { count } = await prisma.userMusic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMusicDeleteManyArgs>(args?: SelectSubset<T, UserMusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMusics
     * const userMusic = await prisma.userMusic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMusicUpdateManyArgs>(args: SelectSubset<T, UserMusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMusic.
     * @param {UserMusicUpsertArgs} args - Arguments to update or create a UserMusic.
     * @example
     * // Update or create a UserMusic
     * const userMusic = await prisma.userMusic.upsert({
     *   create: {
     *     // ... data to create a UserMusic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMusic we want to update
     *   }
     * })
     */
    upsert<T extends UserMusicUpsertArgs>(args: SelectSubset<T, UserMusicUpsertArgs<ExtArgs>>): Prisma__UserMusicClient<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserMusics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicCountArgs} args - Arguments to filter UserMusics to count.
     * @example
     * // Count the number of UserMusics
     * const count = await prisma.userMusic.count({
     *   where: {
     *     // ... the filter for the UserMusics we want to count
     *   }
     * })
    **/
    count<T extends UserMusicCountArgs>(
      args?: Subset<T, UserMusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMusicAggregateArgs>(args: Subset<T, UserMusicAggregateArgs>): Prisma.PrismaPromise<GetUserMusicAggregateType<T>>

    /**
     * Group by UserMusic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMusicGroupByArgs} args - Group by arguments.
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
      T extends UserMusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMusicGroupByArgs['orderBy'] }
        : { orderBy?: UserMusicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMusic model
   */
  readonly fields: UserMusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMusic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    music<T extends MusicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicDefaultArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserMusic model
   */ 
  interface UserMusicFieldRefs {
    readonly userId: FieldRef<"UserMusic", 'String'>
    readonly musicId: FieldRef<"UserMusic", 'String'>
    readonly addedAt: FieldRef<"UserMusic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMusic findUnique
   */
  export type UserMusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter, which UserMusic to fetch.
     */
    where: UserMusicWhereUniqueInput
  }

  /**
   * UserMusic findUniqueOrThrow
   */
  export type UserMusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter, which UserMusic to fetch.
     */
    where: UserMusicWhereUniqueInput
  }

  /**
   * UserMusic findFirst
   */
  export type UserMusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter, which UserMusic to fetch.
     */
    where?: UserMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMusics to fetch.
     */
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMusics.
     */
    cursor?: UserMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMusics.
     */
    distinct?: UserMusicScalarFieldEnum | UserMusicScalarFieldEnum[]
  }

  /**
   * UserMusic findFirstOrThrow
   */
  export type UserMusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter, which UserMusic to fetch.
     */
    where?: UserMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMusics to fetch.
     */
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMusics.
     */
    cursor?: UserMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMusics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMusics.
     */
    distinct?: UserMusicScalarFieldEnum | UserMusicScalarFieldEnum[]
  }

  /**
   * UserMusic findMany
   */
  export type UserMusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter, which UserMusics to fetch.
     */
    where?: UserMusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMusics to fetch.
     */
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMusics.
     */
    cursor?: UserMusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMusics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMusics.
     */
    skip?: number
    distinct?: UserMusicScalarFieldEnum | UserMusicScalarFieldEnum[]
  }

  /**
   * UserMusic create
   */
  export type UserMusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMusic.
     */
    data: XOR<UserMusicCreateInput, UserMusicUncheckedCreateInput>
  }

  /**
   * UserMusic createMany
   */
  export type UserMusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMusics.
     */
    data: UserMusicCreateManyInput | UserMusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMusic createManyAndReturn
   */
  export type UserMusicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserMusics.
     */
    data: UserMusicCreateManyInput | UserMusicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMusic update
   */
  export type UserMusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMusic.
     */
    data: XOR<UserMusicUpdateInput, UserMusicUncheckedUpdateInput>
    /**
     * Choose, which UserMusic to update.
     */
    where: UserMusicWhereUniqueInput
  }

  /**
   * UserMusic updateMany
   */
  export type UserMusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMusics.
     */
    data: XOR<UserMusicUpdateManyMutationInput, UserMusicUncheckedUpdateManyInput>
    /**
     * Filter which UserMusics to update
     */
    where?: UserMusicWhereInput
  }

  /**
   * UserMusic upsert
   */
  export type UserMusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMusic to update in case it exists.
     */
    where: UserMusicWhereUniqueInput
    /**
     * In case the UserMusic found by the `where` argument doesn't exist, create a new UserMusic with this data.
     */
    create: XOR<UserMusicCreateInput, UserMusicUncheckedCreateInput>
    /**
     * In case the UserMusic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMusicUpdateInput, UserMusicUncheckedUpdateInput>
  }

  /**
   * UserMusic delete
   */
  export type UserMusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    /**
     * Filter which UserMusic to delete.
     */
    where: UserMusicWhereUniqueInput
  }

  /**
   * UserMusic deleteMany
   */
  export type UserMusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMusics to delete
     */
    where?: UserMusicWhereInput
  }

  /**
   * UserMusic without action
   */
  export type UserMusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
  }


  /**
   * Model Music
   */

  export type AggregateMusic = {
    _count: MusicCountAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  export type MusicMinAggregateOutputType = {
    id: string | null
    title: string | null
    thumbnailUrl: string | null
    cloudinaryUrl: string | null
  }

  export type MusicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    thumbnailUrl: string | null
    cloudinaryUrl: string | null
  }

  export type MusicCountAggregateOutputType = {
    id: number
    title: number
    thumbnailUrl: number
    cloudinaryUrl: number
    _all: number
  }


  export type MusicMinAggregateInputType = {
    id?: true
    title?: true
    thumbnailUrl?: true
    cloudinaryUrl?: true
  }

  export type MusicMaxAggregateInputType = {
    id?: true
    title?: true
    thumbnailUrl?: true
    cloudinaryUrl?: true
  }

  export type MusicCountAggregateInputType = {
    id?: true
    title?: true
    thumbnailUrl?: true
    cloudinaryUrl?: true
    _all?: true
  }

  export type MusicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to aggregate.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Music
    **/
    _count?: true | MusicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicMaxAggregateInputType
  }

  export type GetMusicAggregateType<T extends MusicAggregateArgs> = {
        [P in keyof T & keyof AggregateMusic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusic[P]>
      : GetScalarType<T[P], AggregateMusic[P]>
  }




  export type MusicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicWhereInput
    orderBy?: MusicOrderByWithAggregationInput | MusicOrderByWithAggregationInput[]
    by: MusicScalarFieldEnum[] | MusicScalarFieldEnum
    having?: MusicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicCountAggregateInputType | true
    _min?: MusicMinAggregateInputType
    _max?: MusicMaxAggregateInputType
  }

  export type MusicGroupByOutputType = {
    id: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
    _count: MusicCountAggregateOutputType | null
    _min: MusicMinAggregateOutputType | null
    _max: MusicMaxAggregateOutputType | null
  }

  type GetMusicGroupByPayload<T extends MusicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicGroupByOutputType[P]>
            : GetScalarType<T[P], MusicGroupByOutputType[P]>
        }
      >
    >


  export type MusicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnailUrl?: boolean
    cloudinaryUrl?: boolean
    users?: boolean | Music$usersArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["music"]>

  export type MusicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnailUrl?: boolean
    cloudinaryUrl?: boolean
  }, ExtArgs["result"]["music"]>

  export type MusicSelectScalar = {
    id?: boolean
    title?: boolean
    thumbnailUrl?: boolean
    cloudinaryUrl?: boolean
  }

  export type MusicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Music$usersArgs<ExtArgs>
    _count?: boolean | MusicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MusicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Music"
    objects: {
      users: Prisma.$UserMusicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      thumbnailUrl: string
      cloudinaryUrl: string
    }, ExtArgs["result"]["music"]>
    composites: {}
  }

  type MusicGetPayload<S extends boolean | null | undefined | MusicDefaultArgs> = $Result.GetResult<Prisma.$MusicPayload, S>

  type MusicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MusicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MusicCountAggregateInputType | true
    }

  export interface MusicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Music'], meta: { name: 'Music' } }
    /**
     * Find zero or one Music that matches the filter.
     * @param {MusicFindUniqueArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicFindUniqueArgs>(args: SelectSubset<T, MusicFindUniqueArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Music that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MusicFindUniqueOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicFindFirstArgs>(args?: SelectSubset<T, MusicFindFirstArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Music that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindFirstOrThrowArgs} args - Arguments to find a Music
     * @example
     * // Get one Music
     * const music = await prisma.music.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Music that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Music
     * const music = await prisma.music.findMany()
     * 
     * // Get first 10 Music
     * const music = await prisma.music.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicWithIdOnly = await prisma.music.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicFindManyArgs>(args?: SelectSubset<T, MusicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Music.
     * @param {MusicCreateArgs} args - Arguments to create a Music.
     * @example
     * // Create one Music
     * const Music = await prisma.music.create({
     *   data: {
     *     // ... data to create a Music
     *   }
     * })
     * 
     */
    create<T extends MusicCreateArgs>(args: SelectSubset<T, MusicCreateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Music.
     * @param {MusicCreateManyArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicCreateManyArgs>(args?: SelectSubset<T, MusicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Music and returns the data saved in the database.
     * @param {MusicCreateManyAndReturnArgs} args - Arguments to create many Music.
     * @example
     * // Create many Music
     * const music = await prisma.music.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Music and only return the `id`
     * const musicWithIdOnly = await prisma.music.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Music.
     * @param {MusicDeleteArgs} args - Arguments to delete one Music.
     * @example
     * // Delete one Music
     * const Music = await prisma.music.delete({
     *   where: {
     *     // ... filter to delete one Music
     *   }
     * })
     * 
     */
    delete<T extends MusicDeleteArgs>(args: SelectSubset<T, MusicDeleteArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Music.
     * @param {MusicUpdateArgs} args - Arguments to update one Music.
     * @example
     * // Update one Music
     * const music = await prisma.music.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicUpdateArgs>(args: SelectSubset<T, MusicUpdateArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Music.
     * @param {MusicDeleteManyArgs} args - Arguments to filter Music to delete.
     * @example
     * // Delete a few Music
     * const { count } = await prisma.music.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicDeleteManyArgs>(args?: SelectSubset<T, MusicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Music
     * const music = await prisma.music.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicUpdateManyArgs>(args: SelectSubset<T, MusicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Music.
     * @param {MusicUpsertArgs} args - Arguments to update or create a Music.
     * @example
     * // Update or create a Music
     * const music = await prisma.music.upsert({
     *   create: {
     *     // ... data to create a Music
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Music we want to update
     *   }
     * })
     */
    upsert<T extends MusicUpsertArgs>(args: SelectSubset<T, MusicUpsertArgs<ExtArgs>>): Prisma__MusicClient<$Result.GetResult<Prisma.$MusicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicCountArgs} args - Arguments to filter Music to count.
     * @example
     * // Count the number of Music
     * const count = await prisma.music.count({
     *   where: {
     *     // ... the filter for the Music we want to count
     *   }
     * })
    **/
    count<T extends MusicCountArgs>(
      args?: Subset<T, MusicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicAggregateArgs>(args: Subset<T, MusicAggregateArgs>): Prisma.PrismaPromise<GetMusicAggregateType<T>>

    /**
     * Group by Music.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicGroupByArgs} args - Group by arguments.
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
      T extends MusicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicGroupByArgs['orderBy'] }
        : { orderBy?: MusicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Music model
   */
  readonly fields: MusicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Music.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Music$usersArgs<ExtArgs> = {}>(args?: Subset<T, Music$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMusicPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Music model
   */ 
  interface MusicFieldRefs {
    readonly id: FieldRef<"Music", 'String'>
    readonly title: FieldRef<"Music", 'String'>
    readonly thumbnailUrl: FieldRef<"Music", 'String'>
    readonly cloudinaryUrl: FieldRef<"Music", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Music findUnique
   */
  export type MusicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findUniqueOrThrow
   */
  export type MusicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music findFirst
   */
  export type MusicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findFirstOrThrow
   */
  export type MusicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Music.
     */
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music findMany
   */
  export type MusicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter, which Music to fetch.
     */
    where?: MusicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Music to fetch.
     */
    orderBy?: MusicOrderByWithRelationInput | MusicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Music.
     */
    cursor?: MusicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Music from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Music.
     */
    skip?: number
    distinct?: MusicScalarFieldEnum | MusicScalarFieldEnum[]
  }

  /**
   * Music create
   */
  export type MusicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to create a Music.
     */
    data: XOR<MusicCreateInput, MusicUncheckedCreateInput>
  }

  /**
   * Music createMany
   */
  export type MusicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Music.
     */
    data: MusicCreateManyInput | MusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Music createManyAndReturn
   */
  export type MusicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Music.
     */
    data: MusicCreateManyInput | MusicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Music update
   */
  export type MusicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The data needed to update a Music.
     */
    data: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
    /**
     * Choose, which Music to update.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music updateMany
   */
  export type MusicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Music.
     */
    data: XOR<MusicUpdateManyMutationInput, MusicUncheckedUpdateManyInput>
    /**
     * Filter which Music to update
     */
    where?: MusicWhereInput
  }

  /**
   * Music upsert
   */
  export type MusicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * The filter to search for the Music to update in case it exists.
     */
    where: MusicWhereUniqueInput
    /**
     * In case the Music found by the `where` argument doesn't exist, create a new Music with this data.
     */
    create: XOR<MusicCreateInput, MusicUncheckedCreateInput>
    /**
     * In case the Music was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicUpdateInput, MusicUncheckedUpdateInput>
  }

  /**
   * Music delete
   */
  export type MusicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
    /**
     * Filter which Music to delete.
     */
    where: MusicWhereUniqueInput
  }

  /**
   * Music deleteMany
   */
  export type MusicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Music to delete
     */
    where?: MusicWhereInput
  }

  /**
   * Music.users
   */
  export type Music$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMusic
     */
    select?: UserMusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMusicInclude<ExtArgs> | null
    where?: UserMusicWhereInput
    orderBy?: UserMusicOrderByWithRelationInput | UserMusicOrderByWithRelationInput[]
    cursor?: UserMusicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMusicScalarFieldEnum | UserMusicScalarFieldEnum[]
  }

  /**
   * Music without action
   */
  export type MusicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Music
     */
    select?: MusicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicInclude<ExtArgs> | null
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
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserMusicScalarFieldEnum: {
    userId: 'userId',
    musicId: 'musicId',
    addedAt: 'addedAt'
  };

  export type UserMusicScalarFieldEnum = (typeof UserMusicScalarFieldEnum)[keyof typeof UserMusicScalarFieldEnum]


  export const MusicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumbnailUrl: 'thumbnailUrl',
    cloudinaryUrl: 'cloudinaryUrl'
  };

  export type MusicScalarFieldEnum = (typeof MusicScalarFieldEnum)[keyof typeof MusicScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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
    musics?: UserMusicListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    musics?: UserMusicOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    musics?: UserMusicListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
  }

  export type UserMusicWhereInput = {
    AND?: UserMusicWhereInput | UserMusicWhereInput[]
    OR?: UserMusicWhereInput[]
    NOT?: UserMusicWhereInput | UserMusicWhereInput[]
    userId?: StringFilter<"UserMusic"> | string
    musicId?: StringFilter<"UserMusic"> | string
    addedAt?: DateTimeFilter<"UserMusic"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    music?: XOR<MusicRelationFilter, MusicWhereInput>
  }

  export type UserMusicOrderByWithRelationInput = {
    userId?: SortOrder
    musicId?: SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    music?: MusicOrderByWithRelationInput
  }

  export type UserMusicWhereUniqueInput = Prisma.AtLeast<{
    userId_musicId?: UserMusicUserIdMusicIdCompoundUniqueInput
    AND?: UserMusicWhereInput | UserMusicWhereInput[]
    OR?: UserMusicWhereInput[]
    NOT?: UserMusicWhereInput | UserMusicWhereInput[]
    userId?: StringFilter<"UserMusic"> | string
    musicId?: StringFilter<"UserMusic"> | string
    addedAt?: DateTimeFilter<"UserMusic"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    music?: XOR<MusicRelationFilter, MusicWhereInput>
  }, "userId_musicId">

  export type UserMusicOrderByWithAggregationInput = {
    userId?: SortOrder
    musicId?: SortOrder
    addedAt?: SortOrder
    _count?: UserMusicCountOrderByAggregateInput
    _max?: UserMusicMaxOrderByAggregateInput
    _min?: UserMusicMinOrderByAggregateInput
  }

  export type UserMusicScalarWhereWithAggregatesInput = {
    AND?: UserMusicScalarWhereWithAggregatesInput | UserMusicScalarWhereWithAggregatesInput[]
    OR?: UserMusicScalarWhereWithAggregatesInput[]
    NOT?: UserMusicScalarWhereWithAggregatesInput | UserMusicScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserMusic"> | string
    musicId?: StringWithAggregatesFilter<"UserMusic"> | string
    addedAt?: DateTimeWithAggregatesFilter<"UserMusic"> | Date | string
  }

  export type MusicWhereInput = {
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    id?: StringFilter<"Music"> | string
    title?: StringFilter<"Music"> | string
    thumbnailUrl?: StringFilter<"Music"> | string
    cloudinaryUrl?: StringFilter<"Music"> | string
    users?: UserMusicListRelationFilter
  }

  export type MusicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    cloudinaryUrl?: SortOrder
    users?: UserMusicOrderByRelationAggregateInput
  }

  export type MusicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicWhereInput | MusicWhereInput[]
    OR?: MusicWhereInput[]
    NOT?: MusicWhereInput | MusicWhereInput[]
    title?: StringFilter<"Music"> | string
    thumbnailUrl?: StringFilter<"Music"> | string
    cloudinaryUrl?: StringFilter<"Music"> | string
    users?: UserMusicListRelationFilter
  }, "id">

  export type MusicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    cloudinaryUrl?: SortOrder
    _count?: MusicCountOrderByAggregateInput
    _max?: MusicMaxOrderByAggregateInput
    _min?: MusicMinOrderByAggregateInput
  }

  export type MusicScalarWhereWithAggregatesInput = {
    AND?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    OR?: MusicScalarWhereWithAggregatesInput[]
    NOT?: MusicScalarWhereWithAggregatesInput | MusicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Music"> | string
    title?: StringWithAggregatesFilter<"Music"> | string
    thumbnailUrl?: StringWithAggregatesFilter<"Music"> | string
    cloudinaryUrl?: StringWithAggregatesFilter<"Music"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    musics?: UserMusicCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    musics?: UserMusicUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    musics?: UserMusicUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    musics?: UserMusicUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserMusicCreateInput = {
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutMusicsInput
    music: MusicCreateNestedOneWithoutUsersInput
  }

  export type UserMusicUncheckedCreateInput = {
    userId: string
    musicId: string
    addedAt?: Date | string
  }

  export type UserMusicUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMusicsNestedInput
    music?: MusicUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserMusicUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    musicId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMusicCreateManyInput = {
    userId: string
    musicId: string
    addedAt?: Date | string
  }

  export type UserMusicUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMusicUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    musicId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicCreateInput = {
    id?: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
    users?: UserMusicCreateNestedManyWithoutMusicInput
  }

  export type MusicUncheckedCreateInput = {
    id?: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
    users?: UserMusicUncheckedCreateNestedManyWithoutMusicInput
  }

  export type MusicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
    users?: UserMusicUpdateManyWithoutMusicNestedInput
  }

  export type MusicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
    users?: UserMusicUncheckedUpdateManyWithoutMusicNestedInput
  }

  export type MusicCreateManyInput = {
    id?: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
  }

  export type MusicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MusicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
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

  export type UserMusicListRelationFilter = {
    every?: UserMusicWhereInput
    some?: UserMusicWhereInput
    none?: UserMusicWhereInput
  }

  export type UserMusicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MusicRelationFilter = {
    is?: MusicWhereInput
    isNot?: MusicWhereInput
  }

  export type UserMusicUserIdMusicIdCompoundUniqueInput = {
    userId: string
    musicId: string
  }

  export type UserMusicCountOrderByAggregateInput = {
    userId?: SortOrder
    musicId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserMusicMaxOrderByAggregateInput = {
    userId?: SortOrder
    musicId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserMusicMinOrderByAggregateInput = {
    userId?: SortOrder
    musicId?: SortOrder
    addedAt?: SortOrder
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

  export type MusicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    cloudinaryUrl?: SortOrder
  }

  export type MusicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    cloudinaryUrl?: SortOrder
  }

  export type MusicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnailUrl?: SortOrder
    cloudinaryUrl?: SortOrder
  }

  export type UserMusicCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput> | UserMusicCreateWithoutUserInput[] | UserMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutUserInput | UserMusicCreateOrConnectWithoutUserInput[]
    createMany?: UserMusicCreateManyUserInputEnvelope
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
  }

  export type UserMusicUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput> | UserMusicCreateWithoutUserInput[] | UserMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutUserInput | UserMusicCreateOrConnectWithoutUserInput[]
    createMany?: UserMusicCreateManyUserInputEnvelope
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserMusicUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput> | UserMusicCreateWithoutUserInput[] | UserMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutUserInput | UserMusicCreateOrConnectWithoutUserInput[]
    upsert?: UserMusicUpsertWithWhereUniqueWithoutUserInput | UserMusicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMusicCreateManyUserInputEnvelope
    set?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    disconnect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    delete?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    update?: UserMusicUpdateWithWhereUniqueWithoutUserInput | UserMusicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMusicUpdateManyWithWhereWithoutUserInput | UserMusicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
  }

  export type UserMusicUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput> | UserMusicCreateWithoutUserInput[] | UserMusicUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutUserInput | UserMusicCreateOrConnectWithoutUserInput[]
    upsert?: UserMusicUpsertWithWhereUniqueWithoutUserInput | UserMusicUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMusicCreateManyUserInputEnvelope
    set?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    disconnect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    delete?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    update?: UserMusicUpdateWithWhereUniqueWithoutUserInput | UserMusicUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMusicUpdateManyWithWhereWithoutUserInput | UserMusicUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMusicsInput = {
    create?: XOR<UserCreateWithoutMusicsInput, UserUncheckedCreateWithoutMusicsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicsInput
    connect?: UserWhereUniqueInput
  }

  export type MusicCreateNestedOneWithoutUsersInput = {
    create?: XOR<MusicCreateWithoutUsersInput, MusicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MusicCreateOrConnectWithoutUsersInput
    connect?: MusicWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutMusicsNestedInput = {
    create?: XOR<UserCreateWithoutMusicsInput, UserUncheckedCreateWithoutMusicsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicsInput
    upsert?: UserUpsertWithoutMusicsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMusicsInput, UserUpdateWithoutMusicsInput>, UserUncheckedUpdateWithoutMusicsInput>
  }

  export type MusicUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<MusicCreateWithoutUsersInput, MusicUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MusicCreateOrConnectWithoutUsersInput
    upsert?: MusicUpsertWithoutUsersInput
    connect?: MusicWhereUniqueInput
    update?: XOR<XOR<MusicUpdateToOneWithWhereWithoutUsersInput, MusicUpdateWithoutUsersInput>, MusicUncheckedUpdateWithoutUsersInput>
  }

  export type UserMusicCreateNestedManyWithoutMusicInput = {
    create?: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput> | UserMusicCreateWithoutMusicInput[] | UserMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutMusicInput | UserMusicCreateOrConnectWithoutMusicInput[]
    createMany?: UserMusicCreateManyMusicInputEnvelope
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
  }

  export type UserMusicUncheckedCreateNestedManyWithoutMusicInput = {
    create?: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput> | UserMusicCreateWithoutMusicInput[] | UserMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutMusicInput | UserMusicCreateOrConnectWithoutMusicInput[]
    createMany?: UserMusicCreateManyMusicInputEnvelope
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
  }

  export type UserMusicUpdateManyWithoutMusicNestedInput = {
    create?: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput> | UserMusicCreateWithoutMusicInput[] | UserMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutMusicInput | UserMusicCreateOrConnectWithoutMusicInput[]
    upsert?: UserMusicUpsertWithWhereUniqueWithoutMusicInput | UserMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: UserMusicCreateManyMusicInputEnvelope
    set?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    disconnect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    delete?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    update?: UserMusicUpdateWithWhereUniqueWithoutMusicInput | UserMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: UserMusicUpdateManyWithWhereWithoutMusicInput | UserMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
  }

  export type UserMusicUncheckedUpdateManyWithoutMusicNestedInput = {
    create?: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput> | UserMusicCreateWithoutMusicInput[] | UserMusicUncheckedCreateWithoutMusicInput[]
    connectOrCreate?: UserMusicCreateOrConnectWithoutMusicInput | UserMusicCreateOrConnectWithoutMusicInput[]
    upsert?: UserMusicUpsertWithWhereUniqueWithoutMusicInput | UserMusicUpsertWithWhereUniqueWithoutMusicInput[]
    createMany?: UserMusicCreateManyMusicInputEnvelope
    set?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    disconnect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    delete?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    connect?: UserMusicWhereUniqueInput | UserMusicWhereUniqueInput[]
    update?: UserMusicUpdateWithWhereUniqueWithoutMusicInput | UserMusicUpdateWithWhereUniqueWithoutMusicInput[]
    updateMany?: UserMusicUpdateManyWithWhereWithoutMusicInput | UserMusicUpdateManyWithWhereWithoutMusicInput[]
    deleteMany?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
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

  export type UserMusicCreateWithoutUserInput = {
    addedAt?: Date | string
    music: MusicCreateNestedOneWithoutUsersInput
  }

  export type UserMusicUncheckedCreateWithoutUserInput = {
    musicId: string
    addedAt?: Date | string
  }

  export type UserMusicCreateOrConnectWithoutUserInput = {
    where: UserMusicWhereUniqueInput
    create: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput>
  }

  export type UserMusicCreateManyUserInputEnvelope = {
    data: UserMusicCreateManyUserInput | UserMusicCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMusicUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMusicWhereUniqueInput
    update: XOR<UserMusicUpdateWithoutUserInput, UserMusicUncheckedUpdateWithoutUserInput>
    create: XOR<UserMusicCreateWithoutUserInput, UserMusicUncheckedCreateWithoutUserInput>
  }

  export type UserMusicUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMusicWhereUniqueInput
    data: XOR<UserMusicUpdateWithoutUserInput, UserMusicUncheckedUpdateWithoutUserInput>
  }

  export type UserMusicUpdateManyWithWhereWithoutUserInput = {
    where: UserMusicScalarWhereInput
    data: XOR<UserMusicUpdateManyMutationInput, UserMusicUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMusicScalarWhereInput = {
    AND?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
    OR?: UserMusicScalarWhereInput[]
    NOT?: UserMusicScalarWhereInput | UserMusicScalarWhereInput[]
    userId?: StringFilter<"UserMusic"> | string
    musicId?: StringFilter<"UserMusic"> | string
    addedAt?: DateTimeFilter<"UserMusic"> | Date | string
  }

  export type UserCreateWithoutMusicsInput = {
    id?: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutMusicsInput = {
    id?: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutMusicsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMusicsInput, UserUncheckedCreateWithoutMusicsInput>
  }

  export type MusicCreateWithoutUsersInput = {
    id?: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
  }

  export type MusicUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    thumbnailUrl: string
    cloudinaryUrl: string
  }

  export type MusicCreateOrConnectWithoutUsersInput = {
    where: MusicWhereUniqueInput
    create: XOR<MusicCreateWithoutUsersInput, MusicUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutMusicsInput = {
    update: XOR<UserUpdateWithoutMusicsInput, UserUncheckedUpdateWithoutMusicsInput>
    create: XOR<UserCreateWithoutMusicsInput, UserUncheckedCreateWithoutMusicsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMusicsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMusicsInput, UserUncheckedUpdateWithoutMusicsInput>
  }

  export type UserUpdateWithoutMusicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutMusicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MusicUpsertWithoutUsersInput = {
    update: XOR<MusicUpdateWithoutUsersInput, MusicUncheckedUpdateWithoutUsersInput>
    create: XOR<MusicCreateWithoutUsersInput, MusicUncheckedCreateWithoutUsersInput>
    where?: MusicWhereInput
  }

  export type MusicUpdateToOneWithWhereWithoutUsersInput = {
    where?: MusicWhereInput
    data: XOR<MusicUpdateWithoutUsersInput, MusicUncheckedUpdateWithoutUsersInput>
  }

  export type MusicUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MusicUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    cloudinaryUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UserMusicCreateWithoutMusicInput = {
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutMusicsInput
  }

  export type UserMusicUncheckedCreateWithoutMusicInput = {
    userId: string
    addedAt?: Date | string
  }

  export type UserMusicCreateOrConnectWithoutMusicInput = {
    where: UserMusicWhereUniqueInput
    create: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput>
  }

  export type UserMusicCreateManyMusicInputEnvelope = {
    data: UserMusicCreateManyMusicInput | UserMusicCreateManyMusicInput[]
    skipDuplicates?: boolean
  }

  export type UserMusicUpsertWithWhereUniqueWithoutMusicInput = {
    where: UserMusicWhereUniqueInput
    update: XOR<UserMusicUpdateWithoutMusicInput, UserMusicUncheckedUpdateWithoutMusicInput>
    create: XOR<UserMusicCreateWithoutMusicInput, UserMusicUncheckedCreateWithoutMusicInput>
  }

  export type UserMusicUpdateWithWhereUniqueWithoutMusicInput = {
    where: UserMusicWhereUniqueInput
    data: XOR<UserMusicUpdateWithoutMusicInput, UserMusicUncheckedUpdateWithoutMusicInput>
  }

  export type UserMusicUpdateManyWithWhereWithoutMusicInput = {
    where: UserMusicScalarWhereInput
    data: XOR<UserMusicUpdateManyMutationInput, UserMusicUncheckedUpdateManyWithoutMusicInput>
  }

  export type UserMusicCreateManyUserInput = {
    musicId: string
    addedAt?: Date | string
  }

  export type UserMusicUpdateWithoutUserInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    music?: MusicUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserMusicUncheckedUpdateWithoutUserInput = {
    musicId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMusicUncheckedUpdateManyWithoutUserInput = {
    musicId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMusicCreateManyMusicInput = {
    userId: string
    addedAt?: Date | string
  }

  export type UserMusicUpdateWithoutMusicInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMusicsNestedInput
  }

  export type UserMusicUncheckedUpdateWithoutMusicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMusicUncheckedUpdateManyWithoutMusicInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicCountOutputTypeDefaultArgs instead
     */
    export type MusicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserMusicDefaultArgs instead
     */
    export type UserMusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserMusicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicDefaultArgs instead
     */
    export type MusicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicDefaultArgs<ExtArgs>

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