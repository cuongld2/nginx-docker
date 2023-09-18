import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllTherapies = ({ data }) => {
  return (
    <div className="therapies_page">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/therapies/${ev.id}`} passHref>
          <a className="card">
            <Image src={ev.image} alt={ev.title} width={500} height={500} /> <h2>{ev.title} </h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllTherapies;
