import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: "Mutation";
  createStudent: Student;
  deleteStudent: Student;
};

export type MutationCreateStudentArgs = {
  input: StudentCreateDto;
};

export type MutationDeleteStudentArgs = {
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  findAllStudents: Array<Student>;
};

export type QueryFindAllStudentsArgs = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  cpf?: Maybe<Scalars["String"]>;
};

export type Student = {
  __typename?: "Student";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  name: Scalars["String"];
  email: Scalars["String"];
  cpf: Scalars["String"];
};

export type StudentCreateDto = {
  name: Scalars["String"];
  email: Scalars["String"];
  cpf: Scalars["String"];
};

export type FindAllStudentsQueryVariables = Exact<{
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  cpf?: Maybe<Scalars["String"]>;
}>;

export type FindAllStudentsQuery = {
  __typename?: "Query";
  findAllStudents: Array<{
    __typename?: "Student";
    id: string;
    name: string;
    email: string;
    cpf: string;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreateStudentMutationVariables = Exact<{
  input: StudentCreateDto;
}>;

export type CreateStudentMutation = {
  __typename?: "Mutation";
  createStudent: {
    __typename?: "Student";
    id: string;
    name: string;
    email: string;
    cpf: string;
    createdAt: any;
    updatedAt: any;
  };
};

export type DeleteStudentMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteStudentMutation = {
  __typename?: "Mutation";
  deleteStudent: {
    __typename?: "Student";
    id: string;
    name: string;
    email: string;
    cpf: string;
    createdAt: any;
    updatedAt: any;
  };
};

export const StudentValuesFragmentDoc = gql`
  fragment StudentValues on Student {
    id
    name
    email
    cpf
    createdAt
    updatedAt
  }
`;
export const FindAllStudentsDocument = gql`
  query FindAllStudents($name: String, $email: String, $cpf: String) {
    findAllStudents(name: $name, email: $email, cpf: $cpf) {
      ...StudentValues
    }
  }
  ${StudentValuesFragmentDoc}
`;

/**
 * __useFindAllStudentsQuery__
 *
 * To run a query within a React component, call `useFindAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllStudentsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      cpf: // value for 'cpf'
 *   },
 * });
 */
export function useFindAllStudentsQuery(
  baseOptions?: Apollo.QueryHookOptions<FindAllStudentsQuery, FindAllStudentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindAllStudentsQuery, FindAllStudentsQueryVariables>(FindAllStudentsDocument, options);
}
export function useFindAllStudentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindAllStudentsQuery, FindAllStudentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindAllStudentsQuery, FindAllStudentsQueryVariables>(FindAllStudentsDocument, options);
}
export type FindAllStudentsQueryHookResult = ReturnType<typeof useFindAllStudentsQuery>;
export type FindAllStudentsLazyQueryHookResult = ReturnType<typeof useFindAllStudentsLazyQuery>;
export type FindAllStudentsQueryResult = Apollo.QueryResult<FindAllStudentsQuery, FindAllStudentsQueryVariables>;
export const CreateStudentDocument = gql`
  mutation CreateStudent($input: StudentCreateDTO!) {
    createStudent(input: $input) {
      ...StudentValues
    }
  }
  ${StudentValuesFragmentDoc}
`;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStudentMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
}
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<
  CreateStudentMutation,
  CreateStudentMutationVariables
>;
export const DeleteStudentDocument = gql`
  mutation DeleteStudent($id: ID!) {
    deleteStudent(id: $id) {
      ...StudentValues
    }
  }
  ${StudentValuesFragmentDoc}
`;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
}
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<
  DeleteStudentMutation,
  DeleteStudentMutationVariables
>;
