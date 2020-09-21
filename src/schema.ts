import gql from 'graphql-tag';

const typeDefs = gql`
    enum CurrencyType {
        AED
        AFN
        ALL
        AMD
        ANG
        AOA
        ARS
        AUD
        AWG
        AZN
        BAM
        BBD
        BDT
        BGN
        BHD
        BIF
        BMD
        BND
        BOB
        BRL
        BSD
        BTC
        BTN
        BWP
        BYN
        BZD
        CAD
        CDF
        CHF
        CLF
        CLP
        CNH
        CNY
        COP
        CRC
        CUC
        CUP
        CVE
        CZK
        DJF
        DKK
        DOP
        DZD
        EGP
        ERN
        ETB
        EUR
        FJD
        FKP
        GBP
        GEL
        GGP
        GHS
        GIP
        GMD
        GNF
        GTQ
        GYD
        HKD
        HNL
        HRK
        HTG
        HUF
        IDR
        ILS
        IMP
        INR
        IQD
        IRR
        ISK
        JEP
        JMD
        JOD
        JPY
        KES
        KGS
        KHR
        KMF
        KPW
        KRW
        KWD
        KYD
        KZT
        LAK
        LBP
        LKR
        LRD
        LSL
        LYD
        MAD
        MDL
        MGA
        MKD
        MMK
        MNT
        MOP
        MRO
        MRU
        MUR
        MVR
        MWK
        MXN
        MYR
        MZN
        NAD
        NGN
        NIO
        NOK
        NPR
        NZD
        OMR
        PAB
        PEN
        PGK
        PHP
        PKR
        PLN
        PYG
        QAR
        RON
        RSD
        RUB
        RWF
        SAR
        SBD
        SCR
        SDG
        SEK
        SGD
        SHP
        SLL
        SOS
        SRD
        SSP
        STD
        STN
        SVC
        SYP
        SZL
        THB
        TJS
        TMT
        TND
        TOP
        TRY
        TTD
        TWD
        TZS
        UAH
        UGX
        USD
        UYU
        UZS
        VEF
        VES
        VND
        VUV
        WST
        XAF
        XAG
        XAU
        XCD
        XDR
        XOF
        XPD
        XPF
        XPT
        YER
        ZAR
        ZMW
        ZWL
    }

    type ConversionStats {
        mostPolularCurrency: String
        totalConverted: Float
        totalConversions: Int
    }

    type Query {
        currentStats: ConversionStats!
        conversions: [Conversion]!
        currencies: [CurrencyType]
    }

    type Conversion {
        _id: ID!
        value: Float!
        originCurrency: CurrencyType!
        targetCurrency: CurrencyType!
        result: Float!
    }

    input NewConversionInput {
        value: Float!
        originCurrency: CurrencyType!
        targetCurrency: CurrencyType!
    }

    type Mutation {
        newConversion(input: NewConversionInput!): Conversion!
    }
`;

export default typeDefs;
