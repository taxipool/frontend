import React from 'react';
import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColumn';
import CommonTableRow from './table/CommonTableRow';
 
const PostList = props => {
  return (
    <>
      <CommonTable headersName={['제목', '등록일']}>
        <CommonTableRow>
          <CommonTableColumn>제목</CommonTableColumn>
          <CommonTableColumn>2022-01-29</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>제목</CommonTableColumn>
          <CommonTableColumn>2022-01-29</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>제목</CommonTableColumn>
          <CommonTableColumn>2022-01-29</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>제목</CommonTableColumn>
          <CommonTableColumn>2022-01-29</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>제목</CommonTableColumn>
          <CommonTableColumn>2022-01-29</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  )
}
 
export default PostList;