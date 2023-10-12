import React from 'react'

export default function Resume() {
  return <div></div>
}

export const getServerSideProps  = async ({ params }: any) => {
  // const path = process.env[params.resume] ?? 'https://cv.israelabebe.com'
  const path = process.env[params.resume] ?? 'https://cv.israelabebe.com'
  return {
    redirect: {
      destination: path,
      permanent: false,
    },
  }
}
