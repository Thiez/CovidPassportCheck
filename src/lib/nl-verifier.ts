import { ASN1 } from '@sardinefish/asn1';

const encodedbase45 =
    'NL2:2QFE0Z9H%H4GCB$0/P5M+F2O6M3UAE7U R4HDIWWVT-CF-97BPTP%IA0*ITJ+.AQ$*OA+Q5JHQ-3-5AONGOQ6*T5Q2MB$DRKZ8U%6R$$QIOYD3DCSYOCM+:IFZO-508453IF*L$$MA1RIM1VUR2*FALEAQZB2M7D%NIBO%4 4X3%1$.N:ZVBAD*5FL/D$+U4.AQYXB-.F*631P8WK3L1XI+N8U9TCO-1Q6AF:I820MG*52L8 .I*.A/KRKB1+.C-Z8$*FC3B4ASN5%./30B60PEWOY/K-GTM9JYEYECDGV1JD$OHWL7%XQXK$*Z3%YHFVFH $XP.HH8NVRW6-INJEXR.I5 .CSFM+ BB R+-WKR8$B1AZO-SFGY29T4G$Y+0SRU$*V.7AT$3PTZQCVG%Q7DS D173IU%IP+PT31LSK-SDD/O T2SXB3G$C:88J2UOH$7F VMFEEND1ABF.4K3RH+4H4-NX.H+ D0I37J+SLIMC5NVET-DFM.K GVECS:$$C8NNJJ1.PXKX-OT96-3NDGC$$52$YAOU.2+K2-%JA3B9BYM/JK.XZJU:W:%.XXRUS1FFAI:B:KK4-2KA4O$%/VM5LY:CKXC%GF0SPW4+EKDV2MZXZA*EM+DYMLJ4T3EO8 %96TH85NG$U2CCGX-*6IF:XQ3DGI*8E0XR5W696A*Z6QZ+MSIYA7/FDMQEEG83*42CO6X.H.BKE5%YH3:-3B-2OQ%N48ZIIT-QQI9.8G+A/NW9R6NG%Z1URA-.2PTWY7AUOZ6E%-V88 :+GXHM+0N+TP-M4C/:K54:84ROW 2BWQS95$NYVLYEE42L:LHZPC*E9Y4WX3XVHUD4Y340$Q 5LFDX:5OKPE:PNGKMHOLYANHT 17/$-KB.T5V9SP+9/CTSFGQD+0P:2 GVV-2XHXLH+H%F 3/2YRV8Y*X 9/ERR7UQER:HVM0/BU7K A/:*6-5CG58R06*6WD+P5Z4BL5-:P7P2AK54QDM 8GFPNVK0VD/T$A.M17D8X+2GM$F0$M84N6$YXW4EOP36GKCPF0%VFHRN$KKE:P3+LDIUPJ:YC./YMHQVOQF5FYMIMQX.4H75.JJC1U:$6LPBBR-M6:B+0UX0/U$+ +F6O2CBV8ORDQA4 $:TBUV1PYC$YPU%HFO779OSB43-F/T9Z6Y4K3*BRJE5J9GKMEM.NPVWGO5*6R-$6I40WYT*4KKHKBRR8 ZATAM/RWJ.3*BQ+4/YTL%HY0NP$++-W8+TF23NWL33K5F4RTEJ GBG8QL.M+UFWM515$W0$DS6-/.ESHKVO:QDZXW-Q3YU$V%N987';

// const encodedbase45 =
//     'NL2:F.BSBJR4KCVU8749*748IDG-%.8-XXWKFFH*D85XE46QBF252NA%3ML7G7R/*3+ZEYV93RO/JDF6%TLU/KORU$CCX*3IR4.3MALC/Z7XYPOPUNZRE98FBRPW1CK*8I2.VFHM5G5HMGFS7WA8LDG%Z3RGKU9EVY H/J-I+0S*6OPOU9ZB9IR3PMUWOT.L JY::4I*U7$S9V MX%-28/ TCO2:%9RI$G:W0D-DM8XLFWEFCI4DUROTYOC2W590JMH4UP.LXHOO+09-6/1G6X.+2+KNZ0MNF0XA/DV+2D0JJ.PBTR*77TMACKY9UJHJLSZG38444KP10AYJO63:8CCW*GT/O7588UWMCW9$* 5Q4*-YWI W04R:FXEX/AZV7LRK27PJ$LOH*EU7W-4:KFBO22H5.R7YRNUFPS6N2-47+B :S-QP:UN%SEF-9C0KYMALCD:S4:$ZNH$7ROI3M:+44MV9SR*UNF$/Z-Y5%FBOJ+.96CXIC574PQ2-T 5RV0NX/ *IMEZGNHV3OFKXPUOUWB.PHB6.MDE*U6X-QNW-UKEQT +Y%2/YTSDNJSE59B8/::1C1MGTDG*AF3TY3 X6VLWBPLU5F4UU*HP.+6*AXEW6N.RGON%0NVC 5Z$GLKQT3AF:4CY3U.4-2% IGUF9L-FY.1$EC+:AQVF2F.RXXIA88:+%JY%OJJ3C1:KJO6:NSKZNGZ++LU-SNBZ+ATTAC$BYUX.IB$59N:7.+5P2:ZXGV%V94SHI-/JZ:2CIS2-7WA+*LLSD*1GOSYJ7YM/A920%C%HCO1S04Z9 GMW+N+%TLSLK.OD28RH49H2SQ+FV-LM/PJZ50*N%3/I3A1:1$2N-A%GEHZ10/3DIN7ITU+.:.H8NVI9%F4P:.%F+X*R$ON0ZYUVTVP V18$II64AV-7S/*SRK9UNPXL3VHZ-*G:F8+EZC448PU/$TN%NLV.*7E%%YBBOHB';

interface ProofSerializationV2 {
    disclosureTimeSeconds: BigInt;
    c: BigInt;
    a: BigInt;
    eResponse: BigInt;
    vResponse: BigInt;
    aResponse: BigInt;
    aDisclosed: BigInt[];
}

const qrDecode = (qr: string) => {
    const qrCharset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
    const multiplier = BigInt(qrCharset.length);
    let bi = BigInt(0);
    for (const s of qr) {
        bi *= multiplier;
        bi += BigInt(qrCharset.indexOf(s));
    }

    let hex = bi.toString(16);
    if (hex.length % 2) {
        hex = '0' + hex;
    }

    const len = hex.length / 2;
    const result = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = parseInt(hex.slice(i + i, i + i + 2), 16);
    }

    return result;
};

const readBigInt = (value: number | string): BigInt => {
    if (typeof value === 'string') {
        value = `0x${value}`;
    }

    return BigInt(value);
};

const printRecursive = (current: ASN1, depth?: string) => {
    depth = depth || 'root';
    console.log(depth, current.toJSON());
    if (Array.isArray(current.value)) {
        const subParts = current.value as ASN1[];
        for (let i = 0; i < subParts.length; i++) {
            printRecursive(subParts[i], `${depth}.${i}`);
        }
    }
};

const validateV2 = (data: Uint8Array) => {
    const buffer = Buffer.from(data);
    const der = ASN1.fromDER(buffer, true);
    printRecursive(der);

    const values = der.value.map((val) => val.value);
    const proofSerialization = {
        disclosureTimeSeconds: readBigInt(values[0]),
        c: readBigInt(values[1]),
        a: readBigInt(values[2]),
        eResponse: readBigInt(values[3]),
        vResponse: readBigInt(values[4]),
        aResponse: readBigInt(values[5]),
        aDisclosed: values[6].map((val) => readBigInt(val.value)),
    };
    console.log(proofSerialization);

    if (!proofSerialization.aDisclosed.length) {
        throw new Error('Metadata attribuut niet vrijgegeven');
    }
};

const validateQr = (qr: string) => {
    if (qr.length < 4) {
        throw new Error('QR code te kort');
    }

    if (qr[0] !== 'N' && qr[1] !== 'L' && qr[3] !== ':') {
        throw new Error('Geen nederlandse QR');
    }

    if (qr[2] !== '2') {
        throw new Error('QR versie ongelijk aan 2');
    }

    const decodedQr = qrDecode(qr.substring(4));
    validateV2(decodedQr);
};

validateQr(encodedbase45);
