"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import dynamic from "next/dynamic";

function HomePagMap() {
  const Map = dynamic(
    () => import("../components/map"), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );
  return <Map />;
}
export default function Home() {
  return (
    <main className={styles.main}>
      <section id="Cover" className={styles.cover}>
        <div className={styles.ornamenTop}>
          <span></span>
        </div>
        <h1>UNDANGAN</h1>
        <h2>MEPANDES</h2>
        <h2>&</h2>
        <h2>TIGA BULANAN</h2>
        <a href="#Detail" className={styles.btn}>
          Lihat Undangan
        </a>
        <div className={styles.ornamenBot}>
          <span></span>
        </div>
      </section>

      <section id="Detail" className={styles.detail}>
        <span className={styles.logo2}>
          <Image
            src="/bangau.png"
            alt="logo1"
            className={styles.vercelLogo}
            width={180}
            height={120}
            priority
          />
        </span>
        <h2 className={styles.title}>TIGA BULANAN</h2>
        <ul>
          <li>KADEK DIVYA PRAMITHA KUSUMA</li>
        </ul>
        <p>
          Putri dari Pasangan Kadek Kevin Kusuma Atmaja dan Komang Ayu
          Trisilawati
        </p>
        <span className={styles.logo2}>
          <Image
            alt="logo2"
            src="/or2.png"
            className={styles.vercelLogo}
            width={100}
            height={100}
            priority
          />
        </span>
        <h2 className={styles.title}>MEPENDES</h2>
        <ul>
          <li>GEDE THADEO ANGGA KUSUMA</li>
          <li>KADEK KEVIN KUSUMA ATMAJA</li>
          <li>KOMANG YANTI KUSUMA DEWI</li>
          <li>KETUT STEVEN KUSUMA NEGARA</li>
        </ul>
        <p>
          Putra dan Putri dari Pasangan I Nyoman Buderesina dan Ni Nengah
          Pesparini
        </p>
      </section>

      <section id="DatePlace" className={styles.dateplace}>
        <Image
          src="/or3.png"
          alt="logo1"
          className={styles.vercelLogo}
          width={300}
          height={120}
          priority
        />
        <h2 className={styles.title}>OM SWASTYASTU</h2>
        <p className="lead">
          Dengan Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
          Maha Esa, Kami Bermaksud Menyelenggarakan Upacara Manusa Yadnya
          Mepandes Puta Putri Kami dan Tiga Bulanan Yang Akan Diselenggarakan
          Pada :
        </p>
        <div className={styles.dateDetail}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>
                <strong>Tanggal Acara</strong>
              </h3>
            </div>
            <div className={styles.cardContent}>
              <h2>4</h2>
              <h3>April 2023</h3>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Alamat</h3>
            </div>
            <div className={styles.cardContent}>
              <h3>Banjar Dinas Sanih, Desa Penglatan, Buleleng</h3>
            </div>
          </div>
        </div>
        <p className="lead">
          Merupakan Kehormatan Dan Kebahagiaan Bagi Kami Sekeluarga Apabila
          Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Doa Restu. Atas
          Kehadiranya dan Doa Restunya Kami Sekeluarga Mengucapkan Terimakasih
        </p>
        <h2 className={styles.title}>OM SHANTI, SHANTI, SHANTI OM</h2>
        <Image
          src="/or4.png"
          alt="logo1"
          className={styles.vercelLogo}
          width={300}
          height={120}
          priority
        />
      </section>

      <section id="MAP" className={styles.map}>
        <h2>LOKASI UPACARA</h2>
        <p>
          Banjar Dinas Sanih, Desa Penglatan, Kecamatan Buleleng, Kabupaten
          Buleleng
        </p>
        <a
          href="https://goo.gl/maps/i2ZeSEwgBp3ZpFQh7"
          className={styles.btnMap}
          target="_blank"
        >
          Buka Map
        </a>
        <HomePagMap />
      </section>
    </main>
  );
}
