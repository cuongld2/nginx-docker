import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DetailTherapy = ({ data, pageName }) => {
  return (
    <div className="detail_therapies">
      <h1> Therapies in {pageName} </h1>

      <div className="content">
        {data.map((ev) => (
          <Link key={ev.id} href={`/therapies/${ev.therapyType}/${ev.id}`} passHref>
            <a className="card">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailTherapy;
